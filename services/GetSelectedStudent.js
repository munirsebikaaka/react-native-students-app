export const getSelectedStudentHandler = (
  key,
  allStudentsArray,
  setSelectedStudent,
  setShowStudentDetails,
) => {
  const selectedStudent = allStudentsArray.find(
    (student) => student.key === key,
  );

  setSelectedStudent(selectedStudent);
  setShowStudentDetails(true);
};
