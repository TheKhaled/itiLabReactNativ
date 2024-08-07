import { StatusBar } from "expo-status-bar";
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  Touchable,
  TouchableOpacity,
  View,
} from "react-native";

export default function App() {
  const DATA = [
    { id: 1, title: "Buy BMW", description: "description 1", completed: false },
    {
      id: 2,
      title: "Buyice cream",
      description: "description 2",
      completed: false,
    },
    {
      id: 3,
      title: "Go to Mousq",
      description: "description 3",
      completed: true,
    },
    // add more tasks...
  ];
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.view}> Todo app </Text>
        <TextInput style={styles.input} placeholder="title"></TextInput>
        <TextInput style={styles.input} placeholder=" description"></TextInput>
        <TouchableOpacity style={styles.button}>
          <Text>add</Text>
        </TouchableOpacity>

        {/* <Divider></Divider>    I dont  know why its dont work alothoug  I install  the libray  */}
        <View style={styles.filtering}>
          <TouchableOpacity style={styles.button}>
            <Text>all</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text>active</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              ...styles.button,

              backgroundColor: "orange",
            }}
          >
            <Text>done</Text>
          </TouchableOpacity>
        </View>

        <FlatList
          data={DATA}
          renderItem={({ item }) => {
            return (
              <View style={styles.todos}>
                <Text>{item.title}</Text>
              </View>
            );
          }}
          keyExtractor={(item) => item.id}
        />
      </View>
    </SafeAreaView>
  );
}

// Create expo projects called “todo-app”
// * screen with title “TODO APP” and contains:-
//     * 2 inputs for Todo title and description
//     * Button for submitting the Todo details
//     * Divider line.
//     * 3 buttons for filtering the todos list with its status (All, active, done) the “All” Keyword will be selected by default
//     * List of Filtered Todos.

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
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
  filtering: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 10,
  },

  todos: {
    margin: 10,
    backgroundColor: "#CAD1D7",
    padding: 10,
    borderRadius: 15,
    alignItems: "flex-start",
    justifyContent: "center",
    width: 200,
  },
});

// const theme = createTheme({
//   lightColors: {
//     primary: "red",
//   },
//   darkColors: {
//     primary: "blue",
//   },
//   components: {
//     Button: {
//       raised: true,
//     },
//   },
// });

// // Your App
// const App = () => {
//   return (
//     <ThemeProvider theme={theme}>
//       <Button>My Button</Button>
//     </ThemeProvider>
//   );
// };
