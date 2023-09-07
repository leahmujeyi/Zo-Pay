import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, Border, FontSize } from "../GlobalStyles";

const ContainerFrame = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.frame, styles.framePosition]}>
      <View style={styles.frameChild} />
      <Text style={[styles.aloisJr, styles.aloisJrTypo]}>Alois_Jr</Text>
      <Text style={[styles.idVerified, styles.aloisJrTypo]}>Id. Verified</Text>
      <Text style={[styles.aloiszjrgmailcom, styles.aloisJrTypo]}>
        alois.z.jr@gmail.com
      </Text>
      <Image
        style={[styles.icons8VerifiedAccount301, styles.icons8Layout]}
        contentFit="cover"
        source={require("../assets/icons8verifiedaccount30-1.png")}
      />
      <Image
        style={[styles.icons8MenuVertical301, styles.icons8Layout]}
        contentFit="cover"
        source={require("../assets/icons8menuvertical30-1.png")}
      />
      <Image
        style={styles.frameItem}
        contentFit="cover"
        source={require("../assets/ellipse-41.png")}
      />
      <Pressable
        style={[styles.icons8NewsFeed302, styles.framePosition]}
        onPress={() => navigation.navigate("HomeScreenMenutabs")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/icons8newsfeed30-21.png")}
        />
      </Pressable>
      <View style={styles.screenshot2RemovebgPreviewParent}>
        <Image
          style={styles.screenshot2RemovebgPreviewIcon}
          contentFit="cover"
          source={require("../assets/screenshot-2removebgpreview-1-12.png")}
        />
        <Image
          style={styles.logo3RemovebgPreview1Icon}
          contentFit="cover"
          source={require("../assets/logo3removebgpreview-12.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  framePosition: {
    top: 1,
    position: "absolute",
  },
  aloisJrTypo: {
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.pTSansCaptionBold,
    fontWeight: "700",
    position: "absolute",
  },
  icons8Layout: {
    height: 21,
    width: 21,
    position: "absolute",
  },
  frameChild: {
    top: 73,
    left: 4,
    borderRadius: Border.br_4xs,
    backgroundColor: Color.lightblue,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    width: 249,
    height: 80,
    position: "absolute",
  },
  aloisJr: {
    top: 119,
    left: 107,
    fontSize: FontSize.size_xs,
  },
  idVerified: {
    top: 100,
    left: 10,
    fontSize: FontSize.size_4xs,
  },
  aloiszjrgmailcom: {
    top: 137,
    left: 76,
    fontSize: FontSize.size_3xs,
  },
  icons8VerifiedAccount301: {
    top: 80,
    left: 19,
  },
  icons8MenuVertical301: {
    top: 78,
    left: 232,
  },
  frameItem: {
    top: 40,
    left: 92,
    width: 75,
    height: 75,
    position: "absolute",
  },
  icon: {
    width: "100%",
    height: "100%",
  },
  icons8NewsFeed302: {
    left: 212,
    width: 41,
    height: 41,
  },
  screenshot2RemovebgPreviewIcon: {
    width: 32,
    height: 39,
  },
  logo3RemovebgPreview1Icon: {
    height: 14,
    marginTop: -8,
    width: 45,
  },
  screenshot2RemovebgPreviewParent: {
    top: 0,
    left: 0,
    height: 45,
    alignItems: "center",
    width: 45,
    position: "absolute",
  },
  frame: {
    left: 2,
    width: 261,
    height: 153,
    overflow: "hidden",
  },
});

export default ContainerFrame;
