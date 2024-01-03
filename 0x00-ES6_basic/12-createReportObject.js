export default function createReportObject(employeesList) {
  const getNumberOfDepartments = (obj) => Object.keys(obj).length;
  return { allEmployees: employeesList, getNumberOfDepartments };
}
