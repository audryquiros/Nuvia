import { api } from '../lib/api.js'

const RESOURCE = 'proveedores'

export const proveedoresService = {
  listar: () => api.getAll(RESOURCE),
  obtener: (id) => api.getById(RESOURCE, id),
  crear: (proveedor) => api.create(RESOURCE, proveedor),
  actualizar: (id, cambios) => api.update(RESOURCE, id, cambios),
  eliminar: (id) => api.remove(RESOURCE, id),
}
