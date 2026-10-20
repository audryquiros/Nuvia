import { api } from '../lib/api.js'

const RESOURCE = 'pagos'

export const pagosService = {
  listar: () => api.getAll(RESOURCE),
  obtener: (id) => api.getById(RESOURCE, id),
  crear: (pago) => api.create(RESOURCE, pago),
  actualizar: (id, cambios) => api.update(RESOURCE, id, cambios),
  eliminar: (id) => api.remove(RESOURCE, id),
}
