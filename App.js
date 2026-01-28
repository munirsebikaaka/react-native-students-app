import { StyleSheet, View } from "react-native";
import RegisterNewStudent from "./pages/RigesterNewStudent";
import { useStudents } from "./contexts/StudentsContext";
import StudentsList from "./pages/StudentsList";
import StudentDetails from "./pages/StudentDetails";

const App = () => {
  const { seeLists, showStudentDetails } = useStudents();
  return (
    <View style={styles.mainContainer}>
      <>
        {showStudentDetails ? (
          <StudentDetails />
        ) : (
          <>{!seeLists ? <RegisterNewStudent /> : <StudentsList />}</>
        )}
      </>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: { flex: 1 },
});

export default App;
