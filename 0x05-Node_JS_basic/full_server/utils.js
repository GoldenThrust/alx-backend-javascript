import fs from 'fs';

function readDatabase(path) {
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
      for (const line of data.slice(1)) {
        if (line.trim() !== '') {
          const columns = line.split(',');
          const field = columns[3];
          const firstname = columns[0];
          if (!(field in studentGroup)) {
            studentGroup[field] = [];
          }
          studentGroup[field] = [...studentGroup[field], firstname];
        }
      }
      resolve(studentGroup);
    });
  });
}

export default readDatabase;
module.exports = readDatabase;
