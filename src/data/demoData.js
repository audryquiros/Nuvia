export const demoInvoices = [
  { id: 'FAC-2026-001', numero: 'F001-000124', proveedorId: 'PROV-001', fechaEmision: '2026-10-12', fechaVencimiento: '2026-10-27', moneda: 'CRC', subtotal: 125000, impuestos: 16250, total: 141250, estado: 'pendiente_revision', metodoPago: 'transferencia', descripcion: 'Compra de materiales de oficina' },
  { id: 'FAC-2026-002', numero: 'F001-000125', proveedorId: 'PROV-002', fechaEmision: '2026-10-14', fechaVencimiento: '2026-10-24', moneda: 'CRC', subtotal: 80000, impuestos: 10400, total: 90400, estado: 'pendiente_aprobacion', metodoPago: 'tarjeta_credito', fechaPagoPrevista: '2026-11-05', cuotas: 3, descripcion: 'Compra de equipo periférico' },
  { id: 'FAC-2026-003', numero: 'F001-000118', proveedorId: 'PROV-001', fechaEmision: '2026-10-08', fechaVencimiento: '2026-10-20', moneda: 'CRC', subtotal: 45000, impuestos: 5850, total: 50850, estado: 'vencida', metodoPago: 'transferencia', descripcion: 'Servicio de mantenimiento' },
  { id: 'FAC-2026-004', numero: 'F001-000110', proveedorId: 'PROV-003', fechaEmision: '2026-10-02', fechaVencimiento: '2026-10-16', moneda: 'CRC', subtotal: 67000, impuestos: 8710, total: 75710, estado: 'pagada', metodoPago: 'transferencia', descripcion: 'Suministros varios' },
]
export const demoSuppliers = [
  { id: 'PROV-001', nombre: 'Suministros del Valle (demo)', identificacionFiscal: 'DEMO-001', correo: 'proveedor1@example.com', telefono: '0000-0000', estado: 'activo' },
  { id: 'PROV-002', nombre: 'Tecnología Central (demo)', identificacionFiscal: 'DEMO-002', correo: 'proveedor2@example.com', telefono: '0000-0000', estado: 'activo' },
  { id: 'PROV-003', nombre: 'Servicios Integrales (demo)', identificacionFiscal: 'DEMO-003', correo: 'proveedor3@example.com', telefono: '0000-0000', estado: 'activo' },
]
export const demoPayments = [
  { id: 'PAG-001', facturaId: 'FAC-2026-002', proveedor: 'Tecnología Central (demo)', monto: 30133.33, fechaVencimiento: '2026-11-05', estado: 'programado', numeroCuota: 1, totalCuotas: 3 },
  { id: 'PAG-002', facturaId: 'FAC-2026-001', proveedor: 'Suministros del Valle (demo)', monto: 141250, fechaVencimiento: '2026-10-27', estado: 'pendiente', numeroCuota: 1, totalCuotas: 1 },
  { id: 'PAG-003', facturaId: 'FAC-2026-003', proveedor: 'Suministros del Valle (demo)', monto: 50850, fechaVencimiento: '2026-10-20', estado: 'pendiente', numeroCuota: 1, totalCuotas: 1 },
]
