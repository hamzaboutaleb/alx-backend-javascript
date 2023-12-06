interface Student {
  firstName: string,
  lastName: string,
  age: number,
  location: string,
};

const student1 : Student = {
  firstName: "hamza",
  lastName: "boutaleb",
  age: 24,
  location: "Marrakech"
};
const student2 : Student = {
  firstName: "jhon",
  lastName: "doe",
  age: 30,
  location: "New York",
};

const studentsList: Student[] = [student1, student2];

const table = document.createElement('table');

studentsList.forEach((student: Student) => {
  const tr = document.createElement('tr');
  table.appendChild(tr);
  tr.insertAdjacentHTML('afterend', `
    <td>${student.firstName}</td>
    <td>${student.lastName}</td>
    <td>${student.age}</td>
    <td>${student.location}</td>
  `);
});

document.body.appendChild(table);
