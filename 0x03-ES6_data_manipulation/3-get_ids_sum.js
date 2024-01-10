export default function getStudentIdsSum(arr) {
  return arr.reduce((acc, { id }) => acc + id, 0);
}
