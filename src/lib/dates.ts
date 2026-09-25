const pad = (n: number) => String(n).padStart(2, '0');

/** Local-time YYYY-MM-DD key. */
export function dateKey(d: Date = new Date()): string {
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
}

export function parseDateKey(key: string): Date | null {
  const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(key.trim());
  if (!m) return null;
  const d = new Date(Number(m[1]), Number(m[2]) - 1, Number(m[3]));
  return d.getMonth() === Number(m[2]) - 1 ? d : null;
}

export function addDays(d: Date, days: number): Date {
  const out = new Date(d);
  out.setDate(out.getDate() + days);
  return out;
}

/** Whole calendar days from today until `key` (negative if past). */
export function daysUntil(key: string): number | null {
  const target = parseDateKey(key);
  if (!target) return null;
  const today = parseDateKey(dateKey())!;
  return Math.round((target.getTime() - today.getTime()) / 86_400_000);
}
