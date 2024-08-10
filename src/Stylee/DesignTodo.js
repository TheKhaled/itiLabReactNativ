import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    // marginTop: 127,
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",

    paddingBottom: 20,
    marginTop: 0,
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
    width: 200,
  },
  button: {
    margin: 10,
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
    backgroundColor: "yellow",
    borderRadius: 15,
    hight: 40,
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
    width: "40%",
    backgroundColor: "#aeaeae",
    marginVertical: 15,
  },

  iconsContiner: {
    flexDirection: "row",
  },
  todoAll: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  todoItem: {
    justifyContent: "space-between",
    flexDirection: "row",
    backgroundColor: "#0FCDDB",
    borderRadius: 15,
    margin: 15,
    width: "80%", // why large is big withe text if there is much text is be big if small it will be small
    // height: 100,
    padding: 10,
    // alignItems: "stretch",
  },
  todoTextTitle: {
    margin: 10,
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
  todoTextDesc: {
    margin: 10,
    fontSize: 20,
    color: "green",
  },
  todoicons: {
    // flexDirection: "row",
    margin: 10,
  },

  ////////

  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  image: {
    //
    // justifyContent: "center",
    //  width: "100%",
    // hight: "100%",
    flex: 1, // Makes the ImageBackground fill the container
    width: "100%", // Ensures the image takes the full width of the container
    height: "100%", // Ensures the image takes the full height of the container
    justifyContent: "center", // Centers content vertically within the ImageBackground
    alignItems: "center", // Centers content horizontally within the ImageBackground
  },
  text: {
    color: "orange",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    // backgroundColor: "#000000c0",
  },
});
