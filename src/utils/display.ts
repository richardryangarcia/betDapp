export const groupBy = (colCount: number, array: any[]): any[][] => {
  if (!array) return [];
  let groupedElements: any[] = [];
  let rowElements: any[] = [];

  //loop through array
  for (let i = 0; i < array.length; i++) {
    if (rowElements.length < colCount) {
      rowElements.push(array[i]);
    } else {
      groupedElements.push(rowElements);
      rowElements = [];
      rowElements.push(array[i]);
    }
  }

  if (rowElements.length === 1) {
    rowElements.push(null);
    rowElements.push(null);
    rowElements.push(null);
  } else if (rowElements.length === 2) {
    rowElements.push(null);
    rowElements.push(null);
  } else if (rowElements.length === 3) {
    rowElements.push(null);
  }

  groupedElements.push(rowElements);

  return groupedElements;
};
