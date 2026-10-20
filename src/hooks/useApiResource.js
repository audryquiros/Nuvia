import { useCallback, useEffect, useState } from 'react'
import { api } from '../lib/api.js'

export function useApiResource(resource) {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const refresh = useCallback(async () => {
    setLoading(true)
    try { setItems(await api.getAll(resource)); setError('') }
    catch (e) { setError('No se pudo conectar con JSON Server. Comprueba que npm run api esté activo.'); }
    finally { setLoading(false) }
  }, [resource])
  useEffect(() => { refresh() }, [refresh])
  const create = async (data) => { const result = await api.create(resource, data); await refresh(); return result }
  const update = async (id, data) => { const result = await api.update(resource, id, data); await refresh(); return result }
  const remove = async (id) => { await api.remove(resource, id); await refresh() }
  return { items, loading, error, refresh, create, update, remove }
}
