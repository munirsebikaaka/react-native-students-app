import { StyleSheet, Text, TextInput, View, Alert } from "react-native";
import SecondaryBtn from "./SecondaryBtn";
import { useState } from "react";
import { COLORS } from "../constants/colors";
import { useStudents } from "../contexts/StudentsContext";

const RegisterNewStudentForm = () => {
  const [names, setNames] = useState("");
  const [studentClass, setStudentClass] = useState("");
  const [id, setId] = useState("");

  const { setSeeLists, setAllStudentsArray } = useStudents();

  const getNameHandler = (names) => {
    setNames(names);
  };
  const getClassHandler = (clas) => {
    setStudentClass(clas);
  };
  const getIdHandler = (id) => {
    setId(id);
  };

  const onCreateStudentDetails = () => {
    if (!names || !studentClass || !id)
      return Alert.alert("Invalid inputs!", "Please fill in all the inputs", [
        { text: "Okey", style: "destructive" },
      ]);

    const student = {
      fullNames: names,
      studentClass: studentClass,
      feesAmount: 0,
      key: id,
    };
    setAllStudentsArray((students) => [...students, student]);
    setSeeLists(true);
    setNames("");
    setStudentClass("");
    setId("");
  };

  return (
    <View style={styles.registerContainerForm}>
      <View style={styles.registerIputCell}>
        <Text style={styles.inputLabel}>Full Names</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Student name"
          value={names}
          onChangeText={getNameHandler}
        />
      </View>
      <View style={styles.registerIputCell}>
        <Text style={styles.inputLabel}>Class</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Class"
          value={studentClass}
          onChangeText={getClassHandler}
        />
      </View>
      <View style={styles.registerIputCell}>
        <Text style={styles.inputLabel}>Id Number</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Student ID"
          value={id}
          onChangeText={getIdHandler}
        />
      </View>
      <SecondaryBtn onPress={onCreateStudentDetails}>Save Student</SecondaryBtn>
    </View>
  );
};

const styles = StyleSheet.create({
  registerContainerForm: {
    flex: 1,
    backgroundColor: COLORS.background,
    paddingVertical: 60,
    paddingHorizontal: 20,
    gap: 45,
  },
  registerIputCell: {
    gap: 15,
  },

  input: {
    borderWidth: 2,
    borderColor: COLORS.border,
    borderRadius: 8,
    paddingLeft: 11,
    fontSize: 16,
  },
  inputLabel: { color: COLORS.textPrimary, fontSize: 16 },
});
export default RegisterNewStudentForm;
