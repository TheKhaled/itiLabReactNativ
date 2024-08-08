import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    // marginTop: 27,
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  view: {
    fontSize: 30,
    fontWeight: "bold",
  },
  input: {
    borderWidth: 1,
    height: 40,
    borderColor: "gray",
    margin: 12,
    padding: 10,
    borderRadius: 8,
  },
  button: {
    margin: 10,
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
    backgroundColor: "yellow",
    borderRadius: 15,
  },
  activeFilterBtn: {
    width: "30%",
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "black",
    backgroundColor: "black",
  },
  activeFilterText: {
    color: "white",
    fontSize: 15,
  },
  filtering: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 10,
  },

  todos: {
    flexDirection: "row",
    flex: 1,
    margin: 10,
    backgroundColor: "#CAD1D7",
    padding: 10,
    borderRadius: 15,
    alignItems: "flex-start",
    justifyContent: "center",
    width: 200,
  },
  dividerLine: {
    height: 1,
    width: "90%",
    backgroundColor: "#aeaeae",
    marginVertical: 15,
  },

  iconsContiner: {
    flexDirection: "row",
  },
});
