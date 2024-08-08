import { View, Text, FlatList } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";
import { styles } from "../Stylee/DesignTodo";

const Loging = ({ route }) => {
  const { data } = route.params;
  return (
    <View>
      <FlatList
        data={data}
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
  );
};

export default Loging;
