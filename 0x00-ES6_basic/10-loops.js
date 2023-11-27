export default function appendToEachArrayValue(array, appendString) {
  for (let [value, idx] of array.entries()) {
    array[idx] = appendString + value;
  }

  return array;
}