import {
  Pressable,
  Text,
  TextInput,
  View,
  StyleSheet,
  Alert,
} from "react-native";
import PageHead from "../components/PageHead";
import { useEffect, useState } from "react";
import { useStudents } from "../contexts/StudentsContext";
import { COLORS } from "../constants/colors";
import { getSameClassStudents } from "../services/GetRelatedClassStudents";
import { updateFeesPaymentsHandler } from "../services/UpdateFees";
import { generateStudentProfile } from "../services/GenerateProfilePic";
import RenderList from "../components/RenderLists";

const StudentDetails = () => {
  const [profilePic, setProfilePic] = useState("");
  const [feesPayments, setFeesPayments] = useState("");
  const [sameClassArray, setSameClassArray] = useState([]);
  const { allStudentsArray, selectedStudent, setSelectedStudent } =
    useStudents();

  const feesPaymentsStateHandler = (payment) => {
    setFeesPayments(payment);
  };

  useEffect(() => {
    if (!selectedStudent) return;
    setProfilePic(generateStudentProfile(selectedStudent));
  }, [selectedStudent]);

  const sameClassStudents = getSameClassStudents(
    allStudentsArray,
    selectedStudent,
  );

  useEffect(() => {
    if (sameClassStudents.length === 0) {
      Alert.alert(
        "No Students Found!",
        "No students with the same class found",
      );
    } else {
      const sameStudents = sameClassStudents.filter(
        (student) => student.key !== selectedStudent.key,
      );
      setSameClassArray(sameStudents);
    }
  }, []);

  return (
    <View style={styles.parentContainer}>
      <PageHead>Student Details</PageHead>
      <View style={styles.studentDetail}>
        <View style={styles.profilePicContainer}>
          <Text style={styles.profilePic}>{profilePic}</Text>
          <Text style={styles.names}>{selectedStudent.fullNames}</Text>
        </View>

        <View style={styles.classIdCell}>
          <Text style={styles.idClass}>
            Class: {selectedStudent.studentClass}
          </Text>
          <Text style={styles.idClass}>ID: {selectedStudent.key}</Text>
          <Text style={styles.idClass}>Fees: {selectedStudent.feesAmount}</Text>
        </View>
      </View>
      <View style={styles.feesPaymentsForm}>
        <TextInput
          placeholder="Paid Fees Amount"
          onChangeText={feesPaymentsStateHandler}
          value={feesPayments}
          style={styles.feesInput}
          keyboardType="number-pad"
        />
        <Pressable
          onPress={() =>
            updateFeesPaymentsHandler(
              setSelectedStudent,
              feesPayments,
              setFeesPayments,
            )
          }>
          <View style={styles.btnCell}>
            <Text style={styles.btnText}>Add Fees</Text>
          </View>
        </Pressable>
      </View>
      {sameClassArray.length > 0 && (
        <Text style={styles.head}>Related class students</Text>
      )}
      <RenderList studentsArray={sameClassArray} />
    </View>
  );
};

const styles = StyleSheet.create({
  parentContainer: { flex: 1 },
  profilePicContainer: {
    alignItems: "center",
    gap: 5,
  },
  profilePic: {
    fontSize: 30,
    color: COLORS.textPrimary,
    borderWidth: 1,
    borderColor: COLORS.border,
    paddingHorizontal: 21,
    paddingVertical: 23,
    borderRadius: 50,
  },
  names: {
    fontSize: 16,
    textTransform: "capitalize",
    color: COLORS.textSecondary,
  },
  classIdCell: {
    paddingHorizontal: 20,
    gap: 2,
  },
  idClass: {
    fontSize: 14,
    color: COLORS.textPrimary,
  },

  studentDetail: {
    paddingVertical: 15,
    gap: 15,
    backgroundColor: COLORS.background,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
  },

  feesPaymentsForm: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 20,
    borderBottomWidth: 1,
    gap: 5,
    borderBottomColor: COLORS.border,
  },
  feesInput: {
    borderWidth: 2,
    borderColor: COLORS.border,
    borderRadius: 8,
    paddingLeft: 11,
    width: "70%",
  },
  btnCell: {
    padding: 8,
    borderRadius: 8,
    backgroundColor: COLORS.success,
  },
  btnText: {
    fontSize: 20,
    textAlign: "center",
    color: COLORS.white,
  },
  head: {
    textAlign: "center",
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
    paddingVertical: 20,
    color: COLORS.textSecondary,
    fontSize: 16,
  },
});
export default StudentDetails;
