import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const BalanceCardForm = () => {
  return (
    <View style={styles.cardsContainersliderhorizo}>
      <LinearGradient
        style={styles.parent}
        locations={[0.63, 1]}
        colors={["#232526", "#134e5e"]}
      >
        <Text style={styles.text}>5457 **** **** 6668</Text>
        <View style={styles.frame}>
          <View style={styles.screenshot2RemovebgPreviewParent}>
            <Image
              style={styles.screenshot2RemovebgPreviewIcon}
              contentFit="cover"
              source={require("../assets/screenshot-2removebgpreview-1-11.png")}
            />
            <Image
              style={styles.logo3RemovebgPreview1Icon}
              contentFit="cover"
              source={require("../assets/logo3removebgpreview-11.png")}
            />
          </View>
          <Image
            style={styles.screenshot92RemovebgPreviewIcon}
            contentFit="cover"
            source={require("../assets/screenshot-92removebgpreview.png")}
          />
        </View>
        <View style={styles.frame1}>
          <Text style={styles.balanceR125700}>Balance: R125, 700</Text>
          <Image
            style={styles.visa1RemovebgPreview11}
            contentFit="cover"
            source={require("../assets/visa1removebgpreview-1-1.png")}
          />
        </View>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    position: "absolute",
    top: 93,
    left: 85,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.montserratRegular,
    color: Color.silver,
    textAlign: "left",
  },
  screenshot2RemovebgPreviewIcon: {
    position: "relative",
    width: 32,
    height: 39,
    left:-5,
  },
  logo3RemovebgPreview1Icon: {
    position: "relative",
    width: 45,
    height: 14,
    left:-3,
    marginTop: -8,
  },
  screenshot2RemovebgPreviewParent: {
    width: 45,
    height: 45,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  screenshot92RemovebgPreviewIcon: {
    width: 50,
    height: 40,
    marginTop: 36,
  },
  frame: {
    position: "absolute",
    top: 0,
    left: 7,
    width: 165,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
  },
  balanceR125700: {
    position: "relative",
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.montserratRegular,
    color: Color.white,
    textAlign: "left",
  },
  visa1RemovebgPreview11: {
    position: "relative",
    width: 70,
    height: 24,
  },
  frame1: {
    position: "absolute",
    top: 128,
    left: 3,
    width: 289,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
  },
  parent: {
    position: "relative",
    borderRadius: Border.br_4xs,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    width: 292,
    height: 158,
    backgroundColor: "transparent",
  },
  cardsContainersliderhorizo: {
    alignSelf: "stretch",
    height: 183,
    flexDirection: "column",
    paddingHorizontal: 0,
    paddingVertical: Padding.p_xs,
    alignItems: "center",
    justifyContent: "flex-end",
  },
});

export default BalanceCardForm;
