import * as React from "react";
import { Pressable, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import FormWithTextInputsAndTitle from "../components/FormWithTextInputsAndTitle";
import { useNavigation } from "@react-navigation/native";
import GoldenAfricaImage from "../components/GoldenAfricaImage";
import { Padding, Color } from "../GlobalStyles";

const LoginPhone = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.loginPhone, styles.containerFlexBox]}>
      <View style={[styles.container, styles.containerFlexBox]}>
        <FormWithTextInputsAndTitle />
        <View style={styles.frame}>
          <Pressable
            style={styles.forwardActionloginfirebase}
            onPress={() => navigation.navigate("LoginCodePageloginverifyPhone")}
          >
            <Image
              style={styles.icon}
              contentFit="cover"
              source={require("../assets/forward-actionloginfirebasephone.png")}
            />
          </Pressable>
          <GoldenAfricaImage
            dimensionCode={require("../assets/golden-africa-image1.png")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerFlexBox: {
    alignItems: "center",
    overflow: "hidden",
  },
  icon: {
    height: "100%",
    overflow: "hidden",
    width: "100%",
  },
  forwardActionloginfirebase: {
    position: "absolute",
    left: 10,
    top: 0,
    width: 48,
    height: 60,
  },
  frame: {
    width: 69,
    height: 170,
    marginTop: 139,
    overflow: "hidden",
  },
  container: {
    alignSelf: "stretch",
    paddingLeft: 19,
    paddingTop: Padding.p_xs,
    paddingRight: 20,
    paddingBottom: Padding.p_xs,
    justifyContent: "flex-end",
  },
  loginPhone: {
    backgroundColor: Color.white,
    flex: 1,
    justifyContent: "center",
    width: "100%",
  },
});

export default LoginPhone;
