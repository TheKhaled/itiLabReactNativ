import { View, Text } from "react-native";
import React, { useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const About = () => {
  const _retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem("@TASKS:key");
      if (value !== null) {
        // We have data!!
        console.log(value);
      } else console.log("noooooooooo");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    _retrieveData();
  }, []);
  return (
    <View>
      <Text>About</Text>
    </View>
  );
};

export default About;
