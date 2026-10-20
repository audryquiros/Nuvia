import { api } from '../lib/api.js'

const RESOURCE = 'aprobaciones'

export const aprobacionesService = {
  listar: () => api.getAll(RESOURCE),
  obtener: (id) => api.getById(RESOURCE, id),
  crear: (aprobacion) => api.create(RESOURCE, aprobacion),
  actualizar: (id, cambios) => api.update(RESOURCE, id, cambios),
  eliminar: (id) => api.remove(RESOURCE, id),
}
