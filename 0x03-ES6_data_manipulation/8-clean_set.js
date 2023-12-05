export default function cleanSet(set, startString) {
  if (startString === undefined || startString.length === 0) return '';
  const arr = Array.from(set);
  return arr.filter((s) => s.startsWith(startString)).map(s => s.slice(startString.length)).join('-');
}
