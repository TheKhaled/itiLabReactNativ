import {
  View,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  Touchable,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { styles } from "../Stylee/DesignTodo";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import Todoo from "../Compents/Todoo";
const Home = ({ route }) => {
  //   const DATA = [
  //     { id: 1, title: "Buy BMW", description: "description 1", completed: false },
  //     {
  //       id: 2,
  //       title: "Buyice cream",
  //       description: "description 2",
  //       completed: false,
  //     },
  //     {
  //       id: 3,
  //       title: "Go to Mousq",
  //       description: "description 3",
  //       completed: true,
  //     },
  //     // add more tasks...
  //   ];

  const Navgation = useNavigation();
  const { data } = route.params;
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.view}> Todo app </Text>
        <TextInput style={styles.input} placeholder="title"></TextInput>
        <TextInput style={styles.input} placeholder=" description"></TextInput>
        <TouchableOpacity style={styles.button}>
          <Text>add</Text>
        </TouchableOpacity>
        <View style={styles.dividerLine}></View>
        <View style={styles.filtering}>
          <TouchableOpacity style={styles.button}>
            <Text>all</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.activeFilterBtn}>
            <Text style={styles.activeFilterText}>active</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => Navgation.navigate("About")}
            style={{
              ...styles.button,

              backgroundColor: "orange",
            }}
          >
            <Text>done</Text>
          </TouchableOpacity>
        </View>
        <Todoo data={data}></Todoo>
      </View>
    </SafeAreaView>
  );
};

export default Home;
