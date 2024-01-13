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

const studentsList: Array<Student> = [Student1, Student2]

function createTabularStudent(students: Array<Student>): void {
    for (const student in students) {
        console.log(student)
    }
}

createTabularStudent(studentsList);