import { View, Text, ImageBackground } from "react-native";
import React from "react";
import { styles } from "../Stylee/DesignTodo";

const BackGround = () => {
  const image = {
    uri: "https://th.bing.com/th/id/OIP.jo6w3IhJ2XAeAJ3NLYXMCAHaE9?rs=1&pid=ImgDetMain",
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="stretch" style={styles.image}>
        <Text style={styles.text}>Welcom to our Todo app</Text>
      </ImageBackground>
    </View>
  );
};

export default BackGround;
