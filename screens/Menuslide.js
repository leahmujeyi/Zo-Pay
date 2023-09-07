import React, { useState } from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, SectionList } from "react-native";
import ContainerFrame from "../components/ContainerFrame";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";
import BalanceCardForm from "../components/BalanceCardMaster";
import FormContainer from "../components/FormContainer";

const Menuslide = () => {
  const [menuTabSectionListData, setMenuTabSectionListData] = useState([]);

  return (
    <View style={styles.menuslide}>
      <View style={[styles.container, styles.menuTabFlexBox]}>
        <Image
          style={[
            styles.statusBarRemovebgPreview1Icon,
            styles.containerChildPosition,
          ]}
          contentFit="cover"
          source={require("../assets/status-barremovebgpreview-1.png")}
        />
        <Image
          style={styles.icons8NewsFeed302}
          contentFit="cover"
          source={require("../assets/icons8newsfeed30-2.png")}
        />
        <View style={styles.screenshot2RemovebgPreviewParent}>
          <Image
            style={styles.screenshot2RemovebgPreviewIcon}
            contentFit="cover"
            source={require("../assets/screenshot-2removebgpreview-1-1.png")}
          />
          <Image
            style={styles.logo3RemovebgPreview1Icon}
            contentFit="cover"
            source={require("../assets/logo3removebgpreview-1.png")}
          />
        </View>
        <Text style={styles.transferrequestFunds}>Transfer/Request Funds:</Text>
        <View style={[styles.containerChild, styles.containerChildPosition]} />
        <View style={styles.lineParent}>
          <View style={[styles.frameChild, styles.frameLayout1]} />
          <View style={[styles.frameItem, styles.frameLayout1]} />
          <View style={[styles.frameInner, styles.frameLayout1]} />
          <View style={[styles.lineView, styles.frameLayout1]} />
          <ContainerFrame />
          <View style={[styles.frame, styles.frameFlexBox]}>
            <Image
              style={styles.cardSharpIconLayout}
              contentFit="cover"
              source={require("../assets/icons8resume30-1.png")}
            />
            <Text style={styles.bioTypo}>Credit Rating   </Text><Text style={{color:'#008037'}}>90/100</Text>
          </View>
          <View style={[styles.frame1, styles.frameFlexBox]}>
            <Image
              style={[styles.cardSharpIcon, styles.cardSharpIconLayout]}
              contentFit="cover"
              source={require("../assets/cardsharp.png")}
            />
            <Text style={[styles.manageAccounts, styles.manageTypo]}>
              Manage Accounts
            </Text>
          </View>
          <View style={[styles.frame2, styles.frameFlexBox]}>
            <Image
              style={styles.cardSharpIconLayout}
              contentFit="cover"
              source={require("../assets/icons8project30-1.png")}
            />
            <Text
              style={[styles.insuranceSavings, styles.bioTypo]}
            >{`Insurance & Savings`}</Text>
          </View>
          <View style={[styles.frame3, styles.frameFlexBox]}>
            <Image
              style={styles.a1RemovebgPreview1Icon}
              contentFit="cover"
              source={require("../assets/a1removebgpreview-1.png")}
            />
            <Text
              style={[styles.manageContacts, styles.manageTypo]}
            >{`Manage Contacts & Networks`}</Text>
          </View>
          <View style={[styles.frame4, styles.frameLayout]}>
            <Image
              style={[styles.frameIcon, styles.frameLayout]}
              contentFit="cover"
              source={require("../assets/frame-20.png")}
            />
            <Text style={[styles.setting, styles.manageTypo]}>Setting</Text>
          </View>
        </View>
      </View>
      <SectionList
        style={[styles.menuTab, styles.menuTabFlexBox]}
        sections={menuTabSectionListData}
        renderItem={(props) => props.item}
        renderSectionHeader={(props) => props.section.headerComponent}
        contentContainerStyle={styles.menuTabSectionListContent}
      />
      <BalanceCardForm />

    
    </View>
  );
};

const styles = StyleSheet.create({
  menuTabSectionListContent: {
    flexDirection: "column",
  },
  menuTabFlexBox: {
    alignSelf: "stretch",
    overflow: "hidden",
  },
  containerChildPosition: {
    width: 414,
    top: 0,
    left: 0,
    position: "absolute",
  },
  frameLayout1: {
    height: 1,
    width: 242,
    borderTopWidth: 1,
    borderColor: "#c4c4c4",
    borderStyle: "solid",
    left: 10,
    position: "absolute",
  },
  frameFlexBox: {
    flexDirection: "row",
    position: "absolute",
  },
  cardSharpIconLayout: {
    width: 30,
    height: 30,
  },
  manageTypo: {
    color: Color.black,
    fontFamily: FontFamily.pTSansCaptionBold,
    fontWeight: "700",
    fontSize: FontSize.size_xs,
    textAlign: "left",
  },
  bioTypo: {
    marginLeft: 20,
    color: Color.black,
    fontFamily: FontFamily.pTSansCaptionBold,
    fontWeight: "700",
    fontSize: FontSize.size_xs,
    textAlign: "left",
  },
  frameLayout: {
    height: 25,
    overflow: "hidden",
  },
  statusBarRemovebgPreview1Icon: {
    height: 27,
  },
  icons8NewsFeed302: {
    top: 35,
    left: 5,
    width: 41,
    height: 41,
    position: "absolute",
  },
  screenshot2RemovebgPreviewIcon: {
    width: 42,
    height: 52,
  },
  logo3RemovebgPreview1Icon: {
    height: 19,
    marginTop: -10,
    width: 60,
  },
  screenshot2RemovebgPreviewParent: {
    top: 27,
    left: 177,
    height: 60,
    width: 60,
    position: "absolute",
    alignItems: "center",
  },
  transferrequestFunds: {
    top: 398,
    left: 9,
    fontSize: FontSize.size_2xl,
    fontFamily: FontFamily.montserratRegular,
    color: Color.chocolate,
    textAlign: "left",
    position: "absolute",
  },
  containerChild: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    height: 661,
  },
  frameChild: {
    top: 235,
  },
  frameItem: {
    top: 312,
  },
  frameInner: {
    top: 389,
  },
  lineView: {
    top: 466,
  },
  frame: {
    top: 189,
    width: 183,
    height: 30,
    flexDirection: "row",
    left: 12,
    alignItems: "center",
    overflow: "hidden",
  },
  cardSharpIcon: {
    overflow: "hidden",
  },
  manageAccounts: {
    marginLeft: 22,
    flex: 1,
  },
  frame1: {
    top: 263,
    width: 154,
    left: 12,
    flexDirection: "row",
    overflow: "hidden",
  },
  insuranceSavings: {
    flex: 1,
  },
  frame2: {
    top: 331,
    width: 163,
    height: 28,
    left: 12,
    flexDirection: "row",
    alignItems: "center",
  },
  a1RemovebgPreview1Icon: {
    width: 36,
    height: 31,
  },
  manageContacts: {
    marginLeft: 24,
    flex: 1,
  },
  frame3: {
    top: 410,
    width: 225,
    left: 10,
    flexDirection: "row",
    alignItems: "center",
    overflow: "hidden",
  },
  frameIcon: {
    width: 25,
  },
  setting: {
    marginLeft: 23,
  },
  frame4: {
    top: 486,
    left: 17,
    width: 91,
    flexDirection: "row",
    position: "absolute",
    alignItems: "center",
  },
  lineParent: {
    top: 126,
    borderTopRightRadius: Border.br_4xs,
    borderBottomRightRadius: Border.br_4xs,
    width: 263,
    height: 530,
    left: 0,
    position: "absolute",
    backgroundColor: Color.white,
  },
  container: {
    height: 736,
  },
  menuTab: {
    marginTop: -76,
    flex: 1,
  },
  BalanceCardFrame:{
   width:100,
   height:40,
   position:"relative",
  },
  menuslide: {
    width: "100%",
    alignItems: "center",
    overflow: "hidden",
    flex: 1,
    backgroundColor: Color.white,
  },
});

export default Menuslide;
