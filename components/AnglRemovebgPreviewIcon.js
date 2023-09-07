import * as React from "react";
import { ImageBackground, StyleSheet } from "react-native";

const AnglRemovebgPreviewIcon = () => {
  return (
    <ImageBackground
      style={styles.anglRemovebgPreviewIcon}
      resizeMode="cover"
      source={require("../assets/anglremovebgpreview.png")}
    />
  );
};

const styles = StyleSheet.create({
  anglRemovebgPreviewIcon: {
    width: 79,
    height: 90,
  },
});

export default AnglRemovebgPreviewIcon;
