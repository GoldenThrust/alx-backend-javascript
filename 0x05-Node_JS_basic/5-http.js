const http = require("http");
const fs = require("fs");

function countStudents(path) {
  return new Promise(function (resolve, reject) {
    if (!fs.existsSync(path)) {
      throw new Error("Cannot load the database");
    }

    fs.readFile(path, "utf8", (err, res) => {
      if (err) {
        reject(new Error("Cannot load the database"));
      }
      const data = res.trim().split("\n");
      const studentGroup = {};
      let numStudents = 0;
      for (const line of data.slice(1)) {
        if (line.trim() !== "") {
          const columns = line.split(",");
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
        }. List: ${students.join(", ")}\n`;
      }
      resolve(log);
    });
  });
}

const app = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Hello Holberton School!");
  } else if (req.url === "/students") {
    countStudents(process.argv[2])
      .then((data) => {
        res.write("This is the list of our students\n");
        res.end(data);
      })
      .catch((error) => {
        res.writeHead(500);
        res.write("This is the list of our students\n");
        res.end(error.message);
      });
  } else {
    res.writeHead(404);
    res.end("We can't find the page you're looking for.");
  }
});

app.listen(1245);

module.exports = app;
