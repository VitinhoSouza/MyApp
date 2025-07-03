import { Platform, StatusBar, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  wrapper: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    flex: 1,
  },
  container: {
    paddingHorizontal: 20,
    flex: 1,
  },
  postContainer: {
    backgroundColor: "#333",
    padding: 24,
    borderRadius: 8,
  },
  postTitle: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
