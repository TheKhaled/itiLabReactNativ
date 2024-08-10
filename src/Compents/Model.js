import { View, Text, Pressable, Modal, Alert } from "react-native";
import React from "react";
import { styles } from "../Stylee/DesignTodo";

const Model = ({ modalVisible, setModalVisible, textmodel }) => {
  //const [, ] = useState(false);

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>{textmodel}</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.textStyle}>OK</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

      {/* <Pressable
        //button
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.textStyle}>Are you want to delete</Text>
      </Pressable> */}
    </View>
  );
};

export default Model;
