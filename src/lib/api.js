const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001'

async function request(resource, options = {}) {
  const response = await fetch(`${API_URL}/${resource}${options.query || ''}`, {
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
    ...options,
  })

  if (!response.ok) {
    throw new Error(`Error de API (${response.status}) al consultar ${resource}`)
  }

  if (response.status === 204) return null
  return response.json()
}

export const api = {
  getAll: (resource) => request(resource),
  getById: (resource, id) => request(`${resource}/${encodeURIComponent(id)}`),
  create: (resource, data) => request(resource, { method: 'POST', body: JSON.stringify(data) }),
  update: (resource, id, data) => request(`${resource}/${encodeURIComponent(id)}`, { method: 'PATCH', body: JSON.stringify(data) }),
  remove: (resource, id) => request(`${resource}/${encodeURIComponent(id)}`, { method: 'DELETE' }),
}
