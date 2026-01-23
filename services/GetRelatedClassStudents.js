export const getSameClassStudents = (students, selectedStudent) => {
  if (!students || !selectedStudent) return [];

  return students.filter(
    (student) => student.studentClass === selectedStudent.studentClass,
  );
};
