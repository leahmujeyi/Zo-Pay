import * as React from "react";
import { ImageBackground, StyleSheet } from "react-native";

const NamRemovebgPreviewIcon = () => {
  return (
    <ImageBackground
      style={styles.namRemovebgPreviewIcon}
      resizeMode="cover"
      source={require("../assets/namremovebgpreview.png")}
    />
  );
};

const styles = StyleSheet.create({
  namRemovebgPreviewIcon: {
    width: 95,
    height: 90,
  },
});

export default NamRemovebgPreviewIcon;
