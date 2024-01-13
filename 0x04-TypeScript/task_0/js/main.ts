interface Student {
    firstName: string,
    lastName: string,
    age: number,
    location: string
}

const Student1: Student = {
    firstName: "John",
    lastName: "Paul",
    age: 18,
    location: "London"
}

const Student2: Student = {
    firstName: "Robert",
    lastName: "Leo",
    age: 19,
    location: "New York"
}

const studentsList: Array<Student> = [Student1, Student2];


const table: Element = document.createElement("table");
table.setAttribute('border', '1');

const thead = document.createElement('thead');
const headerRow = document.createElement('tr');

const firstNameHeader = document.createElement('th');
firstNameHeader.textContent = 'First Name';

const locationHeader = document.createElement('th');
locationHeader.textContent = 'Location';

headerRow.appendChild(firstNameHeader);
headerRow.appendChild(locationHeader);
thead.appendChild(headerRow);
table.appendChild(thead);

const tbody: Element = document.createElement('tbody');

studentsList.forEach(student => {
    const row = document.createElement('tr');

    const firstNameCell = document.createElement('td');
    firstNameCell.textContent = student.firstName;

    const locationCell = document.createElement('td');
    locationCell.textContent = student.location;

    row.appendChild(firstNameCell);
    row.appendChild(locationCell);

    tbody.appendChild(row);
});

table.appendChild(tbody);

document.body.appendChild(table);