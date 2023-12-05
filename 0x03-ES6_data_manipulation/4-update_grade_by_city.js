export default function updateStudentGradeByCity(students, city, grades) {
  const gradesList = {};
  grades.forEach(({ studentId, grade }) => {
    gradesList[studentId] = grade;
  });
  return students.filter((student) => student.location === city).map((student) => {
    let grade = undefined;
    if (student.id in gradesList) {
      grade = gradesList[student.id];
    }
    return {
      ...student,
      grade,
    };
  });
}
