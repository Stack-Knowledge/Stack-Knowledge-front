export const slicePoint = (point: number) =>
  point.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',');
