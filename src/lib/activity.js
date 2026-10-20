export function recordActivity(resource, action, record, recordId) {
  if (typeof window === 'undefined') return
  const activity = {
    id: `activity-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    resource,
    action,
    record: record || null,
    recordId: recordId || record?.id || null,
    occurredAt: new Date().toISOString(),
  }
  try {
    const previous = JSON.parse(localStorage.getItem('nuvia:activity-events') || '[]')
    localStorage.setItem('nuvia:activity-events', JSON.stringify([activity, ...previous.filter((item) => item.id !== activity.id)].slice(0, 100)))
  } catch {}
  window.dispatchEvent(new CustomEvent('nuvia:activity', { detail: activity }))
}
