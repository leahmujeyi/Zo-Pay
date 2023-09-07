import * as React from "react";
import {
  StyleProp,
  ViewStyle,
  StyleSheet,
  Text,
  View,
  Pressable,
} from "react-native";
import { Image } from "expo-image";
import GoldenAfricaImage from "./GoldenAfricaImage";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Padding } from "../GlobalStyles";

const FrameComponent = ({ style }) => {
  const navigation = useNavigation();

  return (
    <View style={[styles.chatParent, style, styles.frameFlexBox]}>
      <View style={[styles.chat, styles.chatLayout]}>
        <Image
          style={styles.chatsRemovebgPreview2Icon}
          contentFit="cover"
          source={require("../assets/chatsremovebgpreview-2.png")}
        />
        <Text style={[styles.chats, styles.chatsTypo]}>Chats</Text>
      </View>
      <View style={[styles.frame, styles.frameFlexBox]}>
        <View style={[styles.frame1, styles.chatLayout]}>
          <View style={[styles.transactions, styles.savingsSpaceBlock]}>
            <Image
              style={styles.qrCodeRemovebgPreview1Icon}
              contentFit="cover"
              source={require("../assets/qr-coderemovebgpreview-1.png")}
            />
            <Text style={[styles.transactions1, styles.chatsTypo]}>
              Transactions
            </Text>
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
        <View style={[styles.savings, styles.savingsSpaceBlock]}>
          <Image
            style={styles.icons8Insurance6411}
            contentFit="cover"
            source={require("../assets/icons8insurance64-1-1.png")}
          />
          <Text style={[styles.savings1, styles.chatsTypo]}>Savings</Text>
        </View>
      </View>
      <Pressable
        style={[styles.profile, styles.savingsSpaceBlock]}
        onPress={() => navigation.navigate("Menuslide")}
      >
        <Image
          style={styles.digitalJobsRemovebgPreviewIcon}
          contentFit="cover"
          source={require("../assets/digital-jobsremovebgpreview.png")}
        />
        <View style={styles.frame2}>
          <Text style={[styles.profile1, styles.chatsTypo]}>Profile</Text>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  frameFlexBox: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  chatLayout: {
    height: 74,
    overflow: "hidden",
    alignItems: "center",
  },
  chatsTypo: {
    height: 14,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.montserratRegular,
    fontSize: FontSize.size_mini,
  },
  savingsSpaceBlock: {
    paddingBottom: 5,
    overflow: "hidden",
    height: 74,
  },
  chatsRemovebgPreview2Icon: {
    height: 45,
    width: 42,
  },
  chats: {
    width: 35,
    marginTop: -2,
  },
  chat: {
    width: 64,
    paddingLeft: Padding.p_mini,
    paddingTop: 13,
    paddingRight: 7,
    paddingBottom: 4,
    overflow: "hidden",
  },
  qrCodeRemovebgPreview1Icon: {
    width: 44,
    height: 38,
  },
  transactions1: {
    width: 82,
    marginTop: 1,
  },
  transactions: {
    width: 99,
    paddingLeft: Padding.p_sm,
    paddingTop: 5,
    paddingRight: Padding.p_10xs,
    justifyContent: "flex-end",
    alignItems: "center",
    paddingBottom: 5,
  },
  frame1: {
    width: 177,
    justifyContent: "flex-end",
    overflow: "hidden",
    flexDirection: "row",
    height: 74,
  },
  icons8Insurance6411: {
    width: 45,
    height: 38,
  },
  savings1: {
    width: 50,
    marginTop: 4,
  },
  savings: {
    width: 70,
    paddingLeft: Padding.p_5xs,
    paddingTop: Padding.p_smi,
    paddingRight: Padding.p_xs,
    justifyContent: "flex-end",
  },
  frame: {
    width: 269,
    overflow: "hidden",
  },
  digitalJobsRemovebgPreviewIcon: {
    width: 61,
    height: 38,
  },
  profile1: {
    width: 42,
  },
  frame2: {
    width: 47,
    alignItems: "flex-end",
    justifyContent: "center",
    overflow: "hidden",
  },
  profile: {
    width: 81,
    paddingHorizontal: Padding.p_3xs,
    paddingTop: Padding.p_base_5,
  },
  chatParent: {
    alignSelf: "stretch",
    backgroundColor: Color.black,
    paddingHorizontal: 0,
    paddingVertical: Padding.p_12xs,
  },
});

export default FrameComponent;
