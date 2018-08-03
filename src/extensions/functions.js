// @flow

export const ObjectPropertySort = (a: {}, b: {}, key: string, direction: string = 'asc'): number => {
  if (a[key] < b[key]) {
    return direction === 'asc' ? -1 : 1;
  }
  if (a[key] > b[key]) {
    return direction === 'asc' ? 1 : -1;
  }
  return 0;
};
