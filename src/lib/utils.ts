export function getProgressPercentage(current: number, total: number) {
  if (total === 0) return 0;

  return Math.round((current / total) * 100);
}
