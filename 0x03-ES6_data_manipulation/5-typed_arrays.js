export default function createInt8TypedArray(length, position, value) {
  if (position >= length || position < 0) {
    throw new Error('Position outside range');
  }
  const buffer = new ArrayBuffer(length);
  const int8Arr = new Int8Array(buffer);
  int8Arr[position] = value;
  return new DataView(buffer);
}
