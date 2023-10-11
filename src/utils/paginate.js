import _ from 'lodash';

export function paginate(itemsArray, pageNumber, pageSize) {
  const startIndex = (pageNumber -1) * pageSize;

  // convert itemsArray to lodash wrapper, so we can chain methods, add .value to convert back to array:
  return _(itemsArray)
    .slice(startIndex)
    .take(pageSize)
    .value();
}