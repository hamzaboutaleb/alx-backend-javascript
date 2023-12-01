import ClassRoom from './0-classroom';

export default function initializeRooms() {
  const classRoms = [19, 20, 34].map((n) => new ClassRoom(n));
  return classRoms;
}
