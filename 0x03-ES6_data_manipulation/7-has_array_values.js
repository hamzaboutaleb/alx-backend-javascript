export default function hasValuesFromArray(set, arr) {
  for (const value of arr) {
    if (!set.has(value)) return false;
  }
  return true;
}
