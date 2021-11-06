export function random(max: number): number;
export function random(min: number, max: number): number;
export function random(minOrMax: number, orMax?: number): number {
  const min = orMax != null ? minOrMax : 0;
  const max = orMax != null ? orMax : min;
  return Math.floor(Math.random() * (max - min + 1) + min);
}
