import readDatabase from "../utils";

class StudentsController {
  static getAllStudents(request, response) {
    let resp = "This is the list of our students\n";
    readDatabase(process.argv[2])
      .then((data) => {
        for (const key in data) {
          resp += `Number of students in ${key}: ${
            data[key].length
          }. List: ${data[key].join(", ")}\n`;
        }
        return response.status(200).send(resp);
      })
      .catch((error) => {
        resp += error.message;
        response.status(500).send(resp);
      });
  }

  static getAllStudentsByMajor(request, response) {
    if (!["CS", "SWE"].includes(request.params.major)) {
      return response.status(500).send("Major parameter must be CS or SWE");
    }
    return readDatabase(process.argv[2])
      .then((data) => {
        return response
          .status(200)
          .send(`List: ${data[request.params.major].join(", ")}`);
      })
      .catch((error) => {
        response.status(500).send(`List: ${error.message}`);
      });
  }
}

export default StudentsController;
