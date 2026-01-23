import { createContext, useContext, useState } from "react";

const StudentsContext = createContext();

export const StudentsProvider = ({ children }) => {
  const [seeLists, setSeeLists] = useState(true);
  const [allStudentsArray, setAllStudentsArray] = useState([]);
  const [showStudentDetails, setShowStudentDetails] = useState(false);
  let [selectedStudent, setSelectedStudent] = useState(null);

  return (
    <StudentsContext.Provider
      value={{
        seeLists,
        setSeeLists,
        allStudentsArray,
        setAllStudentsArray,
        showStudentDetails,
        setShowStudentDetails,
        selectedStudent,
        setSelectedStudent,
      }}>
      {children}
    </StudentsContext.Provider>
  );
};

export const useStudents = () => {
  return useContext(StudentsContext);
};
