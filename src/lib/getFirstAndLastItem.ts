export const getFirstAndLastItem = <T>(array: T[]): T[] => {
  if (array.length === 0) {
    return [];
  }

  if (array.length === 1) {
    return array;
  }

  const firstItem = array[0];
  const lastItem = array[array.length - 1];

  return [firstItem, lastItem];
};
