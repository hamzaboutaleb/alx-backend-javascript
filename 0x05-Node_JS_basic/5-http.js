const http = require('http');
const { readFile } = require('fs').promises;

const hostname = '127.0.0.1';
const port = 1245;

function parseStudentData(data) {
  const students = {};
  const fields = {};
  let length = 0;

  const lines = data.toString().split('\n');
  for (let i = 0; i < lines.length; i += 1) {
    if (lines[i]) {
      length += 1;
      const field = lines[i].toString().split(',');
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
  const data = await readFile(fileName).catch((error) => {
    throw error;
  });

  const parsedData = parseStudentData(data);
  return generateOutput(parsedData);
}

const handleRootRequest = (response) => {
  response.write('Hello Holberton School!');
  response.end();
};

const handleStudentsRequest = async (response) => {
  response.write('This is the list of our students\n');
  try {
    const output = await countStudents(process.argv[2].toString());
    const outString = output.slice(0, -1);
    response.end(outString);
  } catch (error) {
    response.statusCode = 404;
    response.end('Cannot load the database');
  }
};

const app = http.createServer((request, response) => {
  response.statusCode = 200;
  response.setHeader('Content-Type', 'text/plain');

  if (request.url === '/') {
    handleRootRequest(response);
  } else if (request.url === '/students') {
    handleStudentsRequest(response);
  }
});

app.listen(port, hostname, () => {});

module.exports = app;
