export default function createInt8TypedArray(length, position, value) {
  if (position >= length || position < 0) {
    throw new Error('Position outside range');
  }

  const buffer = new ArrayBuffer(length);
  const int8array = new Int8Array(buffer);
  const dataView = new DataView(buffer);

  int8array[position] = value;

  return dataView;
}
