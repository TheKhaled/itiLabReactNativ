// import { View, Text, FlatList } from "react-native";
// import React from "react";
// import { styles } from "../Stylee/DesignTodo";
// import AntDesign from "@expo/vector-icons/AntDesign";
// import Ionicons from "@expo/vector-icons/Ionicons";
// const Todoo = ({ data, DeleteItem, handleRemove }) => {
//   return (
//     <View>
//       {/* <FlatList
//         data={data}
//         renderItem={({ item }) => {
//           return (
//             <View style={styles.todos}>
//               <View style={styles.todos}>
//                 <Text>{item.title}</Text>
//               </View>
//               <View>
//                 <AntDesign
//                   onPress={() => {
//                     DeleteItem(item.id);
//                     handleRemove(it)
//                   }}
//                   name="delete"
//                   size={24}
//                   color="black"
//                 />
//                 <Ionicons
//                   onPress={console.log("aaaaassssss")}
//                   name="checkmark-done-circle-outline"
//                   size={24}
//                   color="black"
//                 />
//               </View>
//             </View>
//           );
//         }}
//         // keyExtractor={(item) => item.id}
//         keyExtractor={(item) => item.id.toString()}
//         // extraData={data.length} // why it doesn't  rerender this view
//         extraData={data}
//       /> */}

//       <FlatList
//         data={data}
//         renderItem={({ item }) => {
//           return (
//             <View style={styles.todos}>
//               <View style={styles.todos}>
//                 <Text>{item.title}</Text>
//               </View>
//               <View>
//                 <AntDesign
//                   onPress={() => {
//                     DeleteItem(item.id);
//                     handleRemove(item);
//                   }}
//                   name="delete"
//                   size={24}
//                   color="black"
//                 />
//                 <Ionicons
//                   onPress={() => console.log("Item completed")}
//                   name="checkmark-done-circle-outline"
//                   size={24}
//                   color="black"
//                 />
//               </View>
//             </View>
//           );
//         }}
//         keyExtractor={(item) => item.id.toString()}
//         extraData={data} // Important to re-render
//       />
//     </View>
//   );
// };

// export default Todoo;

// // fn  delete
// // fn add

import { View, Text, FlatList } from "react-native";
import React, { useState } from "react";
import { styles } from "../Stylee/DesignTodo";
import AntDesign from "@expo/vector-icons/AntDesign";
import Ionicons from "@expo/vector-icons/Ionicons";
import Model from "./Model";
const Todoo = ({ tdata, tDeleteItem, handleRemove }) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.todoAll}>
      <FlatList
        data={tdata}
        renderItem={({ item }) => {
          return (
            <View style={styles.todoItem}>
              <Model
                modalVisible={modalVisible}
                setModalVisible={setModalVisible}
                textmodel="This todo will be delete"
              ></Model>
              <View>
                <Text style={styles.todoTextTitle}>{item.title}</Text>
                <Text style={styles.todoTextDesc}>{item.description}</Text>
              </View>

              <View>
                <AntDesign
                  style={styles.todoicons}
                  onPress={() => {
                    setModalVisible(!modalVisible);
                    tDeleteItem(item.id);
                  }}
                  name="delete"
                  size={24}
                  color="blue"
                />
                <Ionicons
                  style={styles.todoicons}
                  onPress={() => {
                    setModalVisible(!modalVisible);
                  }}
                  name="checkmark-done-circle-outline"
                  size={24}
                  color="blue"
                />
              </View>
            </View>
          );
        }}
        // keyExtractor={(item) => item.id}
        keyExtractor={(item) => item.id.toString()}
        // extraData={data.length} // why it doesn't  rerender this view
        //  extraData={tdata}
      />
    </View>
  );
};

export default Todoo;

// fn  delete
// fn add
