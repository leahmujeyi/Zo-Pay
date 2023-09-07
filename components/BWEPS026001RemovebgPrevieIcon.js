import * as React from "react";
import { ImageBackground, StyleSheet } from "react-native";

const BWEPS026001RemovebgPrevieIcon = () => {
  return (
    <ImageBackground
      style={styles.bwEps026001RemovebgPrevieIcon}
      resizeMode="cover"
      source={require("../assets/bweps026001removebgpreview12.png")}
    />
  );
};

const styles = StyleSheet.create({
  bwEps026001RemovebgPrevieIcon: {
    width: 84,
    height: 90,
  },
});

export default BWEPS026001RemovebgPrevieIcon;
