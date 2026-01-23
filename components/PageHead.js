import { StyleSheet, Text, View, Pressable } from "react-native";
import { COLORS } from "../constants/colors";
import { useStudents } from "../contexts/StudentsContext";

const PageHead = ({ children }) => {
  const { setSeeLists, setShowStudentDetails } = useStudents();

  const updateAstudentHandler = () => {
    setSeeLists(true);
    setShowStudentDetails(false);
  };
  return (
    <View style={styles.headContainer}>
      <Text style={styles.head}>{children}</Text>
      <Pressable onPress={updateAstudentHandler}>
        <Text style={styles.backBtn}>Students Page</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  headContainer: {
    alignItems: "center",
    marginTop: 65,
    paddingBottom: 20,
    paddingHorizontal: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
  },

  head: {
    color: COLORS.primary,
    fontSize: 24,
    fontWeight: 700,
    textAlign: "center",
  },
  backBtn: {
    color: "#5286ed",
    fontSize: 12,
  },
});
export default PageHead;
