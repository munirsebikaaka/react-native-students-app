import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import { getSelectedStudentHandler } from "../services/GetSelectedStudent";
import { useStudents } from "../contexts/StudentsContext";
import { COLORS } from "../constants/colors";

const RenderList = ({ studentsArray }) => {
  const { setShowStudentDetails, setSelectedStudent } = useStudents();
  return (
    <FlatList
      data={studentsArray}
      keyExtractor={(item) => item.key}
      renderItem={(studentsData) => {
        return (
          <View style={styles.studentsItem}>
            <View style={styles.StudentDetails}>
              <Text style={styles.studentNames}>
                {studentsData.item.fullNames}
              </Text>
              <Text style={styles.studentClass}>
                {studentsData.item.studentClass}
              </Text>
            </View>
            <Pressable
              onPress={() =>
                getSelectedStudentHandler(
                  studentsData.item.key,
                  studentsArray,
                  setSelectedStudent,
                  setShowStudentDetails,
                )
              }>
              <Text style={styles.details}>Details</Text>
            </Pressable>
          </View>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  studentsItem: {
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
    paddingVertical: 25,
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  StudentDetails: {
    gap: 3,
  },

  studentNames: {
    textTransform: "capitalize",
    fontSize: 18,
    color: COLORS.textPrimary,
  },

  studentClass: {
    textTransform: "capitalize",
    fontSize: 14,
    color: COLORS.textSecondary,
  },

  details: {
    fontSize: 14,
    color: COLORS.textSecondary,
  },
});
export default RenderList;
