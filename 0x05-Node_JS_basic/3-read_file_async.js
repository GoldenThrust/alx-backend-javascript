const fs = require('fs');

function countStudents(path) {
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
      console.log(`Number of students: ${numStudents}`);
      for (const field in studentGroup) {
        const students = studentGroup[field];
        console.log(
          `Number of students in ${field}: ${students.length
          }. List: ${students.join(', ')}`
        );
      }
      resolve();
    });
  });
}

module.exports = countStudents;
