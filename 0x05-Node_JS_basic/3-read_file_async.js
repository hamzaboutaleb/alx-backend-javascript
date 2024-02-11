const fs = require('fs');

const countStudents = (path) => new Promise((resolve, reject) => {
  fs.promises.readFile(path, 'utf8')
    .then((content) => {
      const students = content.split(/\r?\n/).filter((student) => student.trim() !== '');
      if (students.length < 1) {
        reject(new Error('Cannot load the database'));
      }

      console.log(`Number of students: ${students.length - 1}`);

      const fields = {};
      students.forEach((student, index) => {
        if (index !== 0) {
          const fieldsArray = student.split(',');
          const field = fieldsArray[3];

          if (!fields[field]) {
            fields[field] = [];
          }
          fields[field].push(fieldsArray[0]);
        }
      });

      const fieldKeys = Object.keys(fields);
      for (const field of fieldKeys) {
        const studentsList = fields[field].join(', ');
        console.log(`Number of students in ${field}: ${fields[field].length}. List: ${studentsList}`);
      }

      resolve();
    })
    .catch((/* _unusedErr */) => {
      // eslint-disable-line
      reject(new Error('Cannot load the database'));
    });
});

module.exports = countStudents;
