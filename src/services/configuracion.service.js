import { api } from '../lib/api.js'

const RESOURCE = 'configuracion'

export const configuracionService = {
  obtener: (id = 'general') => api.getById(RESOURCE, id),
  actualizar: (id, cambios) => api.update(RESOURCE, id, cambios),
}
