import * as React from "react";
import { StyleSheet, View } from "react-native";
import FrameComponent1 from "./FrameComponent1";

const ProfileForm = () => {
  return (
    <View style={styles.menuTab}>
      <FrameComponent1 />
    </View>
  );
};

const styles = StyleSheet.create({
  menuTab: {
    position: "absolute",
    top: 660,
    left: 0,
    width: 414,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default ProfileForm;
