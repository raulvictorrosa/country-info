export function addCommas(value: any) {
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}
