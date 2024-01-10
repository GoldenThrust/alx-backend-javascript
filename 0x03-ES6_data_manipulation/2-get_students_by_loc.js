export default function getStudentsByLocation(arr, name) {
  return arr.filter(({ location }) => location === name);
}
