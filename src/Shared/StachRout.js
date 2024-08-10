import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../Screens/Home";
import About from "../Screens/About";
import Loging from "../Screens/Loging";
import { NavigationContainer } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
const StachRout = ({ route }) => {
  const { Navigator, Screen } = createNativeStackNavigator();
  //   const DATA = [
  //     { id: 1, title: "Buy BMW", description: "description 1", completed: false },
  //     {
  //       id: 2,
  //       title: "Buyice cream",
  //       description: "description 2",
  //       completed: false,
  //     },
  //   ];
  const { data, DeleteItem, handleRemove } = route.params;
  const _storeData = async () => {
    console.log("Attempting to store data...");
    try {
      await AsyncStorage.setItem("@TASKS:key", "I like to save it.");
      console.log("Data successfully saved!");
    } catch (error) {
      console.log("Error saving data:", error);
    }
  };

  useEffect(() => {
    _storeData();
  }, []);
  return (
    <Navigator
      //  initialRouteName="khaled"
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
        name="khaled"
        options={{
          title: "khaled",
          headerShown: true,
        }}
        component={Home}
        initialParams={{
          data: data,
          DeleteItem: DeleteItem,
          handleRemove: handleRemove,
        }}
      ></Screen>
      <Screen
        name="Login"
        component={Loging}
        initialParams={{ data: data }}
      ></Screen>
      <Screen name="About" component={About}></Screen>
    </Navigator>
  );
};

export default StachRout;
