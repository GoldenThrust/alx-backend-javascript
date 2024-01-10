export default function updateStudentGradeByCity(arr, name, grade) {
  return arr.filter(({ location }) => location === name)
    .map((student) => {
      const foundGrade = grade.find(({ studentId }) => studentId === student.id);
      const gradeValue = foundGrade ? foundGrade.grade : 'N/A';
      return { ...student, gradeValue };
    });
}
