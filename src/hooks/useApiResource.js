import { useCallback, useEffect, useState } from 'react'
import { api } from '../lib/api.js'

const DATA_CHANGED_EVENT = 'nuvia:data-changed'

function notifyDataChanged(resource) {
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent(DATA_CHANGED_EVENT, { detail: { resource } }))
  }
}

export function useApiResource(resource) {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  const refresh = useCallback(async () => {
    try {
      setItems(await api.getAll(resource))
      setError('')
    } catch (e) {
      setError('No se pudieron cargar los datos. Comprueba tu conexión e inténtalo de nuevo.')
    } finally {
      setLoading(false)
    }
  }, [resource])

  useEffect(() => {
    refresh()
    const handleDataChanged = (event) => {
      if (!event.detail?.resource || event.detail.resource === resource) refresh()
    }
    window.addEventListener(DATA_CHANGED_EVENT, handleDataChanged)
    return () => window.removeEventListener(DATA_CHANGED_EVENT, handleDataChanged)
  }, [refresh, resource])

  const create = async (data) => {
    const result = await api.create(resource, data)
    notifyDataChanged(resource)
    await refresh()
    return result
  }

  const update = async (id, data) => {
    const result = await api.update(resource, id, data)
    notifyDataChanged(resource)
    await refresh()
    return result
  }

  const remove = async (id) => {
    await api.remove(resource, id)
    notifyDataChanged(resource)
    await refresh()
  }

  return { items, loading, error, refresh, create, update, remove }
}
