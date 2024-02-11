const express = require('express');
const { readFile } = require('fs').promises;

const app = express();
const port = 1245;

function parseStudentData(data) {
  const students = {};
  const fields = {};
  let length = 0;

  const lines = data.split('\n');
  for (let i = 0; i < lines.length; i += 1) {
    if (lines[i]) {
      length += 1;
      const field = lines[i].split(',');
      const key = field[3];

      students[key] = students[key] ? [...students[key], field[0]] : [field[0]];
      fields[key] = fields[key] ? fields[key] + 1 : 1;
    }
  }

  return { students, fields, length };
}

function generateOutput({ students, fields, length }) {
  let output = `Number of students: ${length - 1}\n`;
  for (const [key, value] of Object.entries(fields)) {
    if (key !== 'field') {
      output += `Number of students in ${key}: ${value}. `;
      output += `List: ${students[key].join(', ')}\n`;
    }
  }
  return output;
}

async function countStudents(fileName) {
  const data = await readFile(fileName, 'utf8');
  const { students, fields, length } = parseStudentData(data);
  return generateOutput({ students, fields, length });
}

app.get('/', (request, response) => {
  response.send('Hello Holberton School!');
});

app.get('/students', async (request, response) => {
  try {
    const output = await countStudents(process.argv[2].toString());
    response.send(['This is the list of our students', output].join('\n'));
  } catch (error) {
    response.send('This is the list of our students\nCannot load the database');
  }
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}/`);
});

module.exports = app;
