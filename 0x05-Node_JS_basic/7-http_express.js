const express = require('express');
const fs = require('fs');

const app = express();

function countStudents (path) {
  return new Promise(function (resolve, reject) {
    if (!fs.existsSync(path)) {
      throw new Error('Cannot load the database');
    }

    fs.readFile(path, 'utf8', (err, res) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      }
      const data = res.trim().split('\n');
      const studentGroup = {};
      let numStudents = 0;
      for (const line of data.slice(1)) {
        if (line.trim() !== '') {
          const columns = line.split(',');
          const field = columns[3];
          const firstname = columns[0];
          if (!(field in studentGroup)) {
            studentGroup[field] = [];
          }
          studentGroup[field] = [...studentGroup[field], firstname];
          numStudents += 1;
        }
      }
      let log = `Number of students: ${numStudents}\n`;
      for (const field in studentGroup) {
        const students = studentGroup[field];
        log += `Number of students in ${field}: ${
          students.length
        }. List: ${students.join(', ')}\n`;
      }
      resolve(log);
    });
  });
}

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  countStudents(process.argv[2])
    .then((data) => {
      res.send(`This is the list of our students\n${data}`);
    })
    .catch((error) => {
      res
        .status(500)
        .send(`This is the list of our students\n${error.message}`);
    });
});

app.listen(1245);

module.exports = app;
