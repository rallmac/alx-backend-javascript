export default function getStudentsByLocation(array) {
  return array.filter(student => student.location === location);
}
