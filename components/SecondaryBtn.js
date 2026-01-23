import { Pressable, StyleSheet, Text, View } from "react-native";
import { COLORS } from "../constants/colors";

const SecondaryBtn = ({ children, onPress }) => {
  return (
    <Pressable onPress={onPress}>
      <View style={styles.secondaryButton}>
        <Text style={styles.buttonText}>{children}</Text>
      </View>
    </Pressable>
  );
};
const styles = StyleSheet.create({
  secondaryButton: {
    paddingVertical: 14,
    borderRadius: 8,
    backgroundColor: COLORS.success,
  },
  buttonText: {
    fontSize: 20,
    textAlign: "center",
    color: COLORS.white,
  },
});
export default SecondaryBtn;
