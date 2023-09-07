import * as React from "react";
import { Text, StyleSheet, TextInput, View } from "react-native";
import ZoPayLogoAsseticon from "./ZoPayLogoAsseticon";
import { FontFamily, FontSize, Color, Border, Padding } from "../GlobalStyles";

const FormWithTextInputsAndTitle = () => {
  return (
    <View style={styles.frameFlexBox}>
      <ZoPayLogoAsseticon />
      <View style={[styles.frame1, styles.frameFlexBox]}>
        <Text style={[styles.mobileNumber, styles.mobileTypo]}>
          Mobile Number
        </Text>
        <View style={styles.frame2}>
          <Text
            style={[styles.enterYourMobile, styles.mobileTypo]}
          >{`Enter your mobile number to enable your account.`}</Text>
          <TextInput
            style={styles.phoneInput}
            placeholder="Phone Number"
            keyboardType="default"
            placeholderTextColor="rgba(46, 144, 184, 0.6)"
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    alignSelf: "stretch",
  },
  mobileTypo: {
    fontFamily: FontFamily.nunitoBold,
    fontWeight: "700",
  },
  mobileNumber: {
    fontSize: FontSize.size_11xl,
    color: Color.black,
    textAlign: "left",
  },
  enterYourMobile: {
    fontSize: FontSize.size_2xl,
    color: Color.gray_100,
    textAlign: "center",
    alignSelf: "stretch",
    fontFamily: FontFamily.nunitoBold,
  },
  phoneInput: {
    borderRadius: Border.br_4xs,
    backgroundColor: Color.gainsboro,
    height:60,
    shadowColor: "rgba(0, 0, 0, 0.5)",
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    flexDirection: "row",
    paddingHorizontal: Padding.p_2xs,
    paddingVertical: 0,
    justifyContent: "space-between",
    fontFamily: FontFamily.pTSansBold,
    fontSize: FontSize.size_5xl,
    marginTop: 23,
    fontWeight: "700",
    alignItems: "center",
    alignSelf: "stretch",
  },
  frame2: {
    marginTop: 11,
    alignItems: "center",
    overflow: "hidden",
    alignSelf: "stretch",
  },
  frame1: {
    marginTop: 53,
  },
});

export default FormWithTextInputsAndTitle;
