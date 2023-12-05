export default function createInt8TypedArray(length, position, value) {
  const buffer = new ArrayBuffer(length);
  const int8Arr = new Int8Array(buffer);
  if (position > int8Arr.length) {
    throw new Error('Position outside range');
  }
  int8Arr[position] = value;
  return buffer;
}
