import { View, Text, TextInput, StyleSheet, Pressable } from "react-native";
import { COLORS } from "../constants/colors";
import { useStudents } from "../contexts/StudentsContext";
import RenderList from "../components/RenderLists";
import { useEffect, useState } from "react";

const StudentsList = () => {
  const [filteredStudents, setFilteredStudents] = useState([]);
  const [inputValue, setIputValue] = useState("");
  const { setSeeLists, allStudentsArray } = useStudents();

  const onChangeInputValueHandler = (text) => {
    setIputValue(text);
  };

  useEffect(() => {
    if (!inputValue) {
      setFilteredStudents(allStudentsArray);
      return;
    }
    const searchedStudents = allStudentsArray.filter((student) =>
      student.fullNames.toLowerCase().includes(inputValue.toLowerCase()),
    );
    setFilteredStudents(searchedStudents);
  }, [inputValue, allStudentsArray]);

  const updateSeeListsHandler = () => {
    setSeeLists(false);
  };

  return (
    <View style={styles.studentsContainer}>
      <View style={styles.listsHead}>
        <Text style={styles.head}>Students List</Text>
        <Pressable onPress={updateSeeListsHandler}>
          <Text style={styles.addStudentsBtn}>Add Students</Text>
        </Pressable>
      </View>
      {allStudentsArray.length === 0 ? (
        <View style={styles.defaultMessage}>
          <Text style={styles.defaultText}>No registered students.</Text>
          <Pressable onPress={updateSeeListsHandler}>
            <Text style={styles.addStudentsBtn}>Register Student</Text>
          </Pressable>
        </View>
      ) : (
        <>
          <View style={styles.inputContainer}>
            <TextInput
              placeholder="Search student by name..."
              style={styles.input}
              onChangeText={onChangeInputValueHandler}
              value={inputValue}
            />
          </View>
          <RenderList studentsArray={filteredStudents} />
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  studentsContainer: { flex: 1 },
  inputContainer: {
    backgroundColor: COLORS.background,
    paddingVertical: 25,
    paddingHorizontal: 28,
    borderWidth: 1,
    borderColor: COLORS.border,
  },

  input: {
    borderWidth: 1,
    borderColor: COLORS.border,
    paddingHorizontal: 20,
    borderRadius: 6,
    backgroundColor: COLORS.white,
  },

  listsHead: {
    alignItems: "center",
    marginTop: 65,
    paddingBottom: 20,
    paddingHorizontal: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  head: {
    color: COLORS.primary,
    fontSize: 24,
    fontWeight: 700,
    textAlign: "center",
  },
  addStudentsBtn: {
    color: "#5286ed",
    fontSize: 12,
  },

  defaultMessage: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    backgroundColor: COLORS.background,
  },
  defaultText: {
    fontSize: 24,
    textTransform: "capitalize",
    color: COLORS.textPrimary,
  },
});
export default StudentsList;
