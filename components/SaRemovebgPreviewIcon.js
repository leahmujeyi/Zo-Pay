import * as React from "react";
import { ImageBackground, StyleSheet } from "react-native";

const SaRemovebgPreviewIcon = () => {
  return (
    <ImageBackground
      style={styles.saRemovebgPreviewIcon}
      resizeMode="cover"
      source={require("../assets/saremovebgpreview.png")}
    />
  );
};

const styles = StyleSheet.create({
  saRemovebgPreviewIcon: {
    width: 102,
    height: 90,
  },
});

export default SaRemovebgPreviewIcon;
