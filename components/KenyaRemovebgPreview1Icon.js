import * as React from "react";
import { ImageBackground, StyleSheet } from "react-native";

const KenyaRemovebgPreview1Icon = () => {
  return (
    <ImageBackground
      style={styles.kenyaRemovebgPreview1Icon}
      resizeMode="cover"
      source={require("../assets/kenyaremovebgpreview1.png")}
    />
  );
};

const styles = StyleSheet.create({
  kenyaRemovebgPreview1Icon: {
    width: 77,
    height: 90,
  },
});

export default KenyaRemovebgPreview1Icon;
