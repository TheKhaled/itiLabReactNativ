import {
  View,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { styles } from "../Stylee/DesignTodo";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import Todoo from "../Compents/Todoo";
const Home = ({ route }) => {
  const [tDATA, settDATA] = useState([
    { id: 1, title: "Buy BMW", description: "description 1", completed: false },
    {
      id: 2,
      title: "Buyice cream",
      description: "description 2",
      completed: false,
    },
  ]);
  function tDeleteItem(idRemove) {
    const newDATA = tDATA.filter((item) => item.id !== idRemove);
    console.log("Updated DATA:", newDATA); // Add this line
    settDATA(newDATA);
  }

  const Navgation = useNavigation();
  const { data, DeleteItem, handleRemove } = route.params;
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const HandelAdd = () => {
    //settDATA([...tDATA,{id:Math.random(),title:title,description:description,completed:false}])
    if (title && description) {
      settDATA([
        ...tDATA,
        {
          id: Math.random(),
          title: title,
          description: description,
          completed: false,
        },
      ]);
      console.log("====================================");
      console.log(data);
      console.log("====================================");
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.view}> Todo app </Text>

        <TextInput
          onChangeText={(value) => setTitle(value)}
          style={styles.input}
          placeholder="title"
        ></TextInput>
        <TextInput
          onChangeText={(value) => setDescription(value)}
          style={styles.input}
          placeholder=" description"
        ></TextInput>
        <TouchableOpacity onPress={HandelAdd} style={styles.button}>
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
            onPress={() => Navgation.navigate("Login")}
            style={{
              ...styles.button,

              backgroundColor: "orange",
            }}
          >
            <Text>done</Text>
          </TouchableOpacity>
        </View>
        <Todoo
          tdata={tDATA}
          tDeleteItem={tDeleteItem}
          handleRemove={handleRemove}
        ></Todoo>
      </View>
    </SafeAreaView>
  );
};

export default Home;
