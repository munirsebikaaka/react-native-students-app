export const generateStudentProfile = (selectedStudent) => {
  if (!selectedStudent || selectedStudent === null) return;
  const { fullNames } = selectedStudent;
  const profile = fullNames
    .trim()
    .split(" ")
    .map((el) => el[0])
    .join("")
    .toUpperCase();
  return profile;
};
