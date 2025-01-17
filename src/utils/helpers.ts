import dayjs from 'dayjs';

export function getStakerPointOverDays(date: Date, points: number) {
  if (!date) return 1 * points;
  const now = dayjs();
  const diff = now.diff(dayjs(date), 'd');
  return (diff === 0 ? 1 : diff) * points;
}

export function getNumberOfDaysSince(date: Date): number {
  const now = dayjs();
  const diff = now.diff(dayjs(date), 'd');
  return diff === 0 ? 1 : diff;
}

export function toFixedFloat(float: number, maxDigits: number = 0) {
  return Number(float.toFixed(maxDigits));
}

export const VETTING_PERIOD_DATE = dayjs().subtract(90, 'd').toDate();
