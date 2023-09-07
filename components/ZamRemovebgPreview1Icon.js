import * as React from "react";
import { ImageBackground, StyleSheet } from "react-native";

const ZamRemovebgPreview1Icon = () => {
  return (
    <ImageBackground
      style={styles.zamRemovebgPreview1Icon}
      resizeMode="cover"
      source={require("../assets/zamremovebgpreview1.png")}
    />
  );
};

const styles = StyleSheet.create({
  zamRemovebgPreview1Icon: {
    width: 102,
    height: 90,
  },
});

export default ZamRemovebgPreview1Icon;
