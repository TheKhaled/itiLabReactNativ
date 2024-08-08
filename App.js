import { NavigationContainer } from "@react-navigation/native";
import About from "./src/Screens/About";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./src/Screens/Home";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Loging from "./src/Screens/Loging";
import StachRout from "./src/Shared/StachRout";

//const { Navigator, Screen } = createNativeStackNavigator();
const { Navigator, Screen } = createBottomTabNavigator();

export default function App() {
  // const DATA = [
  //   { id: 1, title: "Buy BMW", description: "description 1", completed: false },
  //   {
  //     id: 2,
  //     title: "Buyice cream",
  //     description: "description 2",
  //     completed: false,
  //   },
  //   {
  //     id: 3,
  //     title: "Go to Mousq",
  //     description: "description 3",
  //     completed: true,
  //   },
  //   // add more tasks...
  // ];
  const DATA = [
    { id: 1, title: "Buy BMW", description: "description 1", completed: false },
    {
      id: 2,
      title: "Buyice cream",
      description: "description 2",
      completed: false,
    },
  ];
  return (
    <NavigationContainer>
      <Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: { backgroundColor: "#f4511e" },
          headerTintColor: "#fff",
          headerTitleStyle: { fontWeight: "bold" },
          headerBackVisible: false,
          tabBarStyle: {
            position: "absolute",
            width: "90%",
            bottom: 20,
            borderWidth: 1,
            borderColor: "grey",
            borderTopColor: "grey",
            borderRadius: 20,
            left: "5%",
          },
        }}
      >
        <Screen
          name="Home"
          options={({ title: "Main" }, { headerShown: false })}
          component={StachRout}
          initialParams={{ data: DATA }}

          // initialParams={{ data: DATA }}
        ></Screen>
        <Screen name="Completed Task" component={About}></Screen>
        {/* <Screen name="About" component={About}></Screen>
        <Screen
          name="Log in "
          component={Loging}
          initialParams={{ data: DATA }}
        ></Screen> */}
      </Navigator>
    </NavigationContainer>
  );
}

// Create expo projects called “todo-app”
// * screen with title “TODO APP” and contains:-
//     * 2 inputs for Todo title and description
//     * Button for submitting the Todo details
//     * Divider line.
//     * 3 buttons for filtering the todos list with its status (All, active, done) the “All” Keyword will be selected by default
//     * List of Filtered Todos.

// const styles = StyleSheet.create({
//   container: {
//     // marginTop: 27,
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },

//   view: {
//     fontSize: 30,
//     fontWeight: "bold",
//   },
//   input: {
//     borderWidth: 1,
//     height: 40,
//     borderColor: "gray",
//     margin: 12,
//     padding: 10,
//     borderRadius: 8,
//   },
//   button: {
//     margin: 10,
//     alignItems: "center",
//     backgroundColor: "#DDDDDD",
//     padding: 10,
//     backgroundColor: "yellow",
//     borderRadius: 15,
//   },
//   activeFilterBtn: {
//     width: "30%",
//     height: 40,
//     justifyContent: "center",
//     alignItems: "center",
//     borderRadius: 15,
//     borderWidth: 1,
//     borderColor: "black",
//     backgroundColor: "black",
//   },
//   activeFilterText: {
//     color: "white",
//     fontSize: 15,
//   },
//   filtering: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     margin: 10,
//   },

//   todos: {
//     margin: 10,
//     backgroundColor: "#CAD1D7",
//     padding: 10,
//     borderRadius: 15,
//     alignItems: "flex-start",
//     justifyContent: "center",
//     width: 200,
//   },
//   dividerLine: {
//     height: 1,
//     width: "90%",
//     backgroundColor: "#aeaeae",
//     marginVertical: 15,
//   },
// });

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

//https://reactnative.dev/docs/checkbox

//https://reactnativeelements.com/docs/components/card

//ahmedhamza.dev@gmail.com
//git push -u origin main

//https://icons.expo.fyi/Index/Ionicons/checkmark-done-circle-outline
// still need  function add and elete
//aysnic storge
