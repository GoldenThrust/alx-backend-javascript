/* eslint-disable */
/// <reference path="./subjects/Cpp.ts" />
/// <reference path="./subjects/Java.ts" />
/// <reference path="./subjects/React.ts" />
/// <reference path="./subjects/Subject.ts" />
/// <reference path="./subjects/Teacher.ts" />
/* eslint-enable */

const cTeacher: Subjects.Teacher = {
  firstName: 'Namikaze',
  lastName: 'Naruto',
  experienceTeachingC: 10,
};

// For Cpp subject
console.log('C++:');
Subjects.cpp.setTeacher(cTeacher);
console.log(Subjects.cpp.getRequirements());
console.log(Subjects.cpp.getAvailableTeacher());

// For Java subject
console.log('\nJava:');
Subjects.java.setTeacher(cTeacher);
console.log(Subjects.java.getRequirements());
console.log(Subjects.java.getAvailableTeacher());

// For React subject
console.log('\nReact:');
Subjects.react.setTeacher(cTeacher);
console.log(Subjects.react.getRequirements());
console.log(Subjects.react.getAvailableTeacher());
