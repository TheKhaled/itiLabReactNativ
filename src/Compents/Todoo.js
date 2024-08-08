import { View, Text, FlatList } from "react-native";
import React from "react";
import { styles } from "../Stylee/DesignTodo";
import AntDesign from "@expo/vector-icons/AntDesign";
import Ionicons from "@expo/vector-icons/Ionicons";
const Todoo = ({ data }) => {
  return (
    <View>
      <FlatList
        data={data}
        renderItem={({ item }) => {
          return (
            <View style={styles.todos}>
              <View style={styles.todos}>
                <Text>{item.title}</Text>
              </View>
              <View>
                <AntDesign name="delete" size={24} color="black" />
                <Ionicons
                  name="checkmark-done-circle-outline"
                  size={24}
                  color="black"
                />
              </View>
            </View>
          );
        }}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default Todoo;
