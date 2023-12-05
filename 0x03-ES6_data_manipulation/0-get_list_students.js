function stuednt(id, firstName, location) {
  return {
    id,
    firstName,
    location,
  };
}

export default function getListStudents() {
  return [
    stuednt(1, 'Guillaume', 'San Francisco'),
    stuednt(2, 'James', 'Columbia'),
    stuednt(5, 'Serena', 'San Francisco'),
  ];
}
