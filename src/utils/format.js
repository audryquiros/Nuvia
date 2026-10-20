export function formatCurrency(value, currency = 'CRC') {
  return new Intl.NumberFormat('es-CR', { style: 'currency', currency, maximumFractionDigits: 2 }).format(Number(value || 0))
}
export function formatDate(value) {
  if (!value) return '—'
  return new Intl.DateTimeFormat('es-CR', { day: '2-digit', month: 'short', year: 'numeric' }).format(new Date(`${value}T12:00:00`))
}
export function supplierName(id, suppliers) {
  return suppliers.find((supplier) => supplier.id === id)?.nombre || 'Proveedor sin identificar'
}
