import { Platform, StatusBar, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  wrapper: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    flex: 1,
  },
  scrollView: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    flex: 1,
  },
  buttonsContainer: { gap: 16 },
  button: {
    backgroundColor: "#222",
    height: 48,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonLabel: { color: "#fff", fontWeight: "bold" },
  buttonDisabled: {
    backgroundColor: "#ccc",
  },
});
