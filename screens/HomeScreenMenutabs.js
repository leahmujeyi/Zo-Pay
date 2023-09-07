import * as React from "react";
import { Pressable, StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import ProfileForm from "../components/ProfileForm";
import BalanceCardForm from "../components/BalanceCardForm";
import FormContainer from "../components/FormContainer";
import GoldenAfricaImage from "../components/GoldenAfricaImage";
import { FontFamily, FontSize, Color } from "../GlobalStyles";
import { color } from "react-native-reanimated";
import { TouchableOpacity } from "react-native-gesture-handler";

const HomeScreenMenutabs = () => {
  const navigation = useNavigation();
  const navigator = useNavigation();
  return (
    <View style={styles.homeScreenMenutabs}>
      <View style={styles.container}>
        <ProfileForm />
        <View style={styles.account}>
        <Pressable
            style={styles.forwardActionloginfirebase}
            onPress={() => navigator.navigate("Menuslide")}
          >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/vector1.png")}
          />
           </Pressable>
        </View>
        <Text style={[styles.addNewAccount, styles.addNewAccountTypo]}>
          Add New Account
        </Text>
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
        <View style={styles.frame}>
          <BalanceCardForm />
          <View style={styles.frame1}>
            <Text
              style={[styles.transferrequestFunds, styles.addNewAccountTypo]}
            >
              Transfer/Request Funds:
            </Text>
          </View>
          <FormContainer />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  addNewAccountTypo: {
    textAlign: "left",
    justifyContent:"center",
    fontFamily: FontFamily.montserratRegular,
    fontSize: FontSize.size_lg,
  },
  vectorIcon: {
    height: "172.42%",
    width: "244.79%",
    top: "-13.93%",
    right: "-72.4%",
    bottom: "-58.49%",
    left: "-72.4%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  icon: {
    height: "100%",
    overflow: "hidden",
    width: "100%",
  },
  account: {
    top: 595,
    left: 185,
    width: 9,
    height: 27,
    position: "absolute",
  },
  addNewAccount: {
    top: 560,
    left: 100,
    color: Color.black,
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
    left: 158,
    height: 75,
    width: 75,
    position: "absolute",
    alignItems: "center",
  },
  transferrequestFunds: {
    color: Color.chocolate,
    alignSelf: "stretch",
  },
  frame1: {
    width: 233,
    alignItems: "flex-end",
    overflow: "hidden",
    justifyContent: "center",
  },
  frame: {
    top: 154,
    left: 0,
    width: 415,
    position: "absolute",
    justifyContent:"flex-end",
    overflow: "hidden",
  },
  container: {
    height: 736,
    overflow: "hidden",
    alignSelf: "stretch",
  },
  iconLayout: {
    maxHeight: 30,
    maxWidth: 15,
    marginLeft:10,
    marginTop:10,
    overflow: "hidden",
  },
  homeScreenMenutabs: {
    backgroundColor: Color.white,
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default HomeScreenMenutabs;
