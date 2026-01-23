import { StyleSheet, View } from "react-native";
import PageHead from "../components/PageHead";
import RegisterNewStudentForm from "../components/RegisterStudentForm";

const RegisterNewStudent = () => {
  return (
    <View style={styles.registerComponent}>
      <PageHead>Add Student</PageHead>
      <RegisterNewStudentForm />
    </View>
  );
};
const styles = StyleSheet.create({
  registerComponent: {
    flex: 1,
  },
});
export default RegisterNewStudent;
