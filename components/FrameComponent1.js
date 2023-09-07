import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import GoldenAfricaImage from "./GoldenAfricaImage";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Padding } from "../GlobalStyles";

const FrameComponent1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.chatParent}>
      <View style={styles.chat}>
        <Image
          style={styles.chatsRemovebgPreview2Icon}
          contentFit="cover"
          source={require("../assets/chatsremovebgpreview-2.png")}
        />
        <Text style={styles.chats}>Chats</Text>
      </View>
      <View style={styles.frame}>
        <View style={styles.frame1}>
          <View style={styles.transactions}>
            <Image
              style={styles.qrCodeRemovebgPreview1Icon}
              contentFit="cover"
              source={require("../assets/qr-coderemovebgpreview-1.png")}
            />
            <Text style={styles.transactions1}>Transactions</Text>
          </View>
          <GoldenAfricaImage
            dimensionCode={require("../assets/golden-africa-image.png")}
            propPosition="relative"
            propHeight={60}
            propWidth={69}
            propTop="unset"
            propRight="unset"
            propBottom="unset"
            propLeft="unset"
            propMaxWidth="unset"
            propOverflow="unset"
            propMaxHeight="unset"
            propMarginLeft={9}
          />
        </View>
        <View style={styles.savings}>
          <Image
            style={styles.icons8Insurance6411}
            contentFit="cover"
            source={require("../assets/savings.jpg")}
          />
          <Text style={styles.savings1}>Savings</Text>
        </View>
      </View>
      <Pressable
        style={styles.profile}
        onPress={() => navigation.navigate("Menuslide")}
      >
        <Image
          style={styles.digitalJobsRemovebgPreviewIcon}
          contentFit="cover"
          source={require("../assets/digital-jobsremovebgpreview.png")}
        />
        <Text style={styles.profile1}>Profile</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  chatsRemovebgPreview2Icon: {
    position: "relative",
    width: 42,
    height: 45,
  },
  chats: {
    position: "relative",
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.montserratRegular,
    color: Color.black,
    textAlign: "left",
    width: 35,
    height: 14,
    marginTop: -2,
  },
  chat: {
    width: 64,
    height: 74,
    overflow: "hidden",
    flexDirection: "column",
    paddingLeft: Padding.p_mini,
    paddingTop: 13,
    paddingRight: 7,
    paddingBottom: 4,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  qrCodeRemovebgPreview1Icon: {
    position: "relative",
    width: 44,
    height: 38,
  },
  transactions1: {
    position: "relative",
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.montserratRegular,
    color: Color.black,
    textAlign: "left",
    width: 82,
    height: 14,
    marginTop: 1,
  },
  transactions: {
    width: 99,
    height: 74,
    overflow: "hidden",
    flexDirection: "column",
    paddingLeft: Padding.p_sm,
    paddingTop: 5,
    paddingRight: Padding.p_10xs,
    paddingBottom: 5,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  frame1: {
    width: 177,
    height: 74,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  icons8Insurance6411: {
    position: "relative",
    width: 45,
    height: 38,
  },
  savings1: {
    position: "relative",
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.montserratRegular,
    color: Color.black,
    textAlign: "left",
    width: 50,
    height: 14,
    marginTop: 4,
  },
  savings: {
    width: 70,
    height: 74,
    overflow: "hidden",
    flexDirection: "column",
    paddingLeft: Padding.p_5xs,
    paddingTop: Padding.p_smi,
    paddingRight: Padding.p_xs,
    paddingBottom: 5,
    alignItems: "flex-start",
    justifyContent: "flex-end",
  },
  frame: {
    width: 269,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  digitalJobsRemovebgPreviewIcon: {
    position: "relative",
    width: 55,
    height: 37,
  },
  profile1: {
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.montserratRegular,
    color: Color.black,
    textAlign: "left",
    width: 42,
    height: 14,
    marginLeft: 5,
  },
  profile: {
    width: 81,
    height: 74,
    overflow: "hidden",
    flexDirection: "column",
    paddingHorizontal: Padding.p_3xs,
    paddingTop: Padding.p_base_5,
    paddingBottom: 5,
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  chatParent: {
    alignSelf: "auto",
    backgroundColor: Color.white,
    flexDirection: "row",
    left:-7,
    paddingHorizontal: 18,
    paddingVertical: Padding.p_12xs,
    //alignItems: "baseline",
    //alignContent:"flex-end",
  
  },
});

export default FrameComponent1;
