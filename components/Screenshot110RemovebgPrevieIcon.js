import * as React from "react";
import { ImageBackground, StyleSheet } from "react-native";

const Screenshot110RemovebgPrevieIcon = () => {
  return (
    <ImageBackground
      style={styles.screenshot110RemovebgPrevieIcon}
      resizeMode="cover"
      source={require("../assets/screenshot110removebgpreview.png")}
    />
  );
};

const styles = StyleSheet.create({
  screenshot110RemovebgPrevieIcon: {
    width: 98,
    height: 90,
  },
});

export default Screenshot110RemovebgPrevieIcon;
