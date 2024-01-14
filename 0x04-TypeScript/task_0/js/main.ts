interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const Student1: Student = {
  firstName: "John",
  lastName: "Paul",
  age: 18,
  location: "London",
};

const Student2: Student = {
  firstName: "Robert",
  lastName: "Leo",
  age: 19,
  location: "New York",
};

const studentsList: Array<Student> = [Student1, Student2];

const table = document.createElement("table");
table.setAttribute("border", "1");

const thead = table.createTHead();
const headerRow = thead.insertRow();

const firstNameHeader = headerRow.insertCell(0);
firstNameHeader.textContent = "First Name";

const locationHeader = headerRow.insertCell(1);
locationHeader.textContent = "Location";

const tbody = table.createTBody();

studentsList.forEach((student) => {
  const row = tbody.insertRow();

  const firstNameCell = row.insertCell(0);
  firstNameCell.textContent = student.firstName;

  const locationCell = row.insertCell(1);
  locationCell.textContent = student.location;
});

document.body.appendChild(table);
