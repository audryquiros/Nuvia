import { api } from '../lib/api.js'

const RESOURCE = 'facturas'

export const facturasService = {
  listar: () => api.getAll(RESOURCE),
  obtener: (id) => api.getById(RESOURCE, id),
  crear: (factura) => api.create(RESOURCE, factura),
  actualizar: (id, cambios) => api.update(RESOURCE, id, cambios),
  eliminar: (id) => api.remove(RESOURCE, id),
}
