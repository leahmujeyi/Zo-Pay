import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { FontSize, FontFamily, Color, Padding } from "../GlobalStyles";

const FormContainer = () => {
  return (
    <View style={styles.frame}>
      <View style={styles.contactsContainersliderhor}>
        <View style={styles.frameParent}>
          <View style={[styles.frame1, styles.framePosition]}>
            <Image
              style={styles.frameChild}
              contentFit="cover"
              source={require("../assets/ellipse-1.png")}
            />
            <Text style={styles.aklil}>Aklil</Text>
          </View>
          <View style={[styles.frame2, styles.frameLayout]}>
            <Image
              style={styles.frameChild}
              contentFit="cover"
              source={require("../assets/ellipse-2.png")}
            />
            <Text style={styles.aklil}>Firdows</Text>
          </View>
          <View style={[styles.frame3, styles.framePosition]}>
            <Image
              style={styles.frameChild}
              contentFit="cover"
              source={require("../assets/ellipse-3.png")}
            />
            <Text style={styles.aklil}>Lefika</Text>
          </View>
          <View style={[styles.frame4, styles.frameLayout]}>
            <Image
              style={styles.frameChild}
              contentFit="cover"
              source={require("../assets/ellipse-4.png")}
            />
            <Text style={styles.aklil}>Bahumi</Text>
          </View>
          <View style={[styles.frame5, styles.framePosition]}>
            <Image
              style={styles.frameChild}
              contentFit="cover"
              source={require("../assets/ellipse-5.png")}
            />
            <Text style={styles.aklil}>Phatsimo</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  framePosition: {
    alignItems: "center",
    height: 87,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  frameLayout: {
    justifyContent: "flex-end",
    width: 61,
    height: 87,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  frameChild: {
    height: 60,
    width: 60,
  },
  aklil: {
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.montserratRegular,
    color: Color.silver,
    textAlign: "left",
    marginTop: 7,
  },
  frame1: {
    left: 0,
    width: 60,
  },
  frame2: {
    left: 107,
    paddingRight: Padding.p_12xs,
  },
  frame3: {
    left: 214,
    width: 60,
  },
  frame4: {
    left: 320,
  },
  frame5: {
    left: 424,
    width: 74,
  },
  frameParent: {
    left: 6,
    width: 498,
    height: 87,
    top: 0,
    position: "absolute",
  },
  contactsContainersliderhor: {
    height: 91,
    alignSelf: "stretch",
  },
  frame: {
    alignItems: "flex-end",
    justifyContent: "center",
    overflow: "hidden",
    alignSelf: "stretch",
  },
});

export default FormContainer;
