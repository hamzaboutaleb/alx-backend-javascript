export default function cleanSet(set, startString) {
  const arr = Array.from(set);
  return arr.filter((s) => s.startsWith(startString)).joins(' - ');
}
