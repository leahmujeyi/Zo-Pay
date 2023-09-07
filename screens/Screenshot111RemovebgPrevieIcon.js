import * as React from "react";
import { ImageBackground, StyleSheet } from "react-native";

const Screenshot111RemovebgPrevieIcon = () => {
  return (
    <ImageBackground
      style={styles.screenshot111RemovebgPrevieIcon}
      resizeMode="cover"
      source={require("../assets/screenshot111removebgpreview1.png")}
    />
  );
};

const styles = StyleSheet.create({
  screenshot111RemovebgPrevieIcon: {
    flex: 1,
    width: "100%",
    height: 90,
  },
});

export default Screenshot111RemovebgPrevieIcon;
