import * as React from "react";
import { Text, StyleSheet, View, TextInput, Pressable } from "react-native";
import { Image } from "expo-image";
import ZoPayLogoAsseticon from "../components/ZoPayLogoAsseticon";
import { useNavigation } from "@react-navigation/native";
import GoldenAfricaImage from "../components/GoldenAfricaImage";
import { FontFamily, FontSize, Color, Border, Padding } from "../GlobalStyles";

const LoginCodePageloginverify = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.loginCodePageloginverify, styles.frame1FlexBox]}>
      <View style={[styles.container, styles.frame2FlexBox]}>
        <View style={[styles.frame, styles.otpFlexBox]}>
          <View style={[styles.frame1, styles.frame1FlexBox]}>
            <ZoPayLogoAsseticon />
            <Pressable
          style={styles.vector}
          onPress={() => navigation.navigate("LoginPhone")}
        >
          <Image
            style={[styles.icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/Vector.png")}
          />
        </Pressable>
            <View style={[styles.frame2, styles.frame2FlexBox]}>
              <Text style={[styles.verifyOtp, styles.verifyOtpTypo]}>
                Verify OTP
              </Text>
              <Text
                style={[styles.pleaseEnterThe, styles.verifyOtpTypo]}
              >{`Please enter the OTP sent to your registered number.`}</Text>
            </View>
            
          </View>
          <View style={[styles.otp, styles.otpFlexBox]}>
            <TextInput
              style={styles.enterCodeHere}
              placeholder="Enter Code Here"
              keyboardType="default"
              placeholderTextColor="rgba(46, 144, 184, 0.6)"
            />
            
          </View>
          
        </View>
        <View style={styles.frame3}>
          <Pressable
            style={[styles.logInActionverifyPhonefi, styles.vectorIconPosition]}
            onPress={() => navigation.navigate("HomeScreenMenutabs")}
          >
            <Image
              style={[styles.vectorIcon, styles.vectorIconPosition]}
              contentFit="cover"
              source={require("../assets/vector.png")}
            />
          </Pressable>
         
          <GoldenAfricaImage
            dimensionCode={require("../assets/golden-africa-image1.png")}
            propPosition="absolute"
            propHeight={60}
            propWidth={69}
            propTop={110}
            propRight="unset"
            propBottom="unset"
            propLeft="50%"
            propMaxWidth="unset"
            propOverflow="unset"
            propMaxHeight="unset"
            propMarginLeft={-34.72}
          />
          
        </View>
        
      </View>
     
    </View>
  );
};

const styles = StyleSheet.create({
  frame1FlexBox: {
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  icon: {
    height: "100%",
    overflow: "hidden",
    width: "100%",
  },
  frame2FlexBox: {
    justifyContent: "flex-end",
    alignSelf: "stretch",
    alignItems: "center",
    overflow: "hidden",
  },
  otpFlexBox: {
    alignItems: "center",
    alignSelf: "stretch",
  },
  verifyOtpTypo: {
    fontFamily: FontFamily.nunitoBold,
    fontWeight: "700",
  },
  vectorIconPosition: {
    position: "absolute",
    overflow: "hidden",
  },
  verifyOtp: {
    fontSize: FontSize.size_11xl,
    color: Color.black,
    textAlign: "left",
  },
  pleaseEnterThe: {
    fontSize: FontSize.size_2xl,
    color: "rgba(0, 0, 0, 0.6)",
    textAlign: "center",
    marginTop: 11,
    alignSelf: "stretch",
  },
  frame2: {
    marginTop: 70,
  },
  frame1: {
    alignSelf: "stretch",
  },
  enterCodeHere: {
    fontFamily: FontFamily.pTSansBold,
    fontSize: FontSize.size_5xl,
    fontWeight: "700",
    
  },
  otp: {
    borderRadius: Border.br_4xs,
    backgroundColor: Color.gainsboro,
    shadowColor: "rgba(0, 0, 0, 0.75)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    height:60,
    shadowOpacity: 1,
    flexDirection: "row",
    paddingHorizontal: 6,
    paddingVertical: 0,
    marginTop: 36,
    alignSelf: "stretch",
  },
  frame: {
    alignSelf: "stretch",
    overflow: "hidden",
  },
  vectorIcon: {
    height: "100%",
    width: "85.42%",
    top: "0%",
    right: "5.21%",
    bottom: "0%",
    left: "9.38%",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  logInActionverifyPhonefi: {
    marginLeft: -23.72,
    top: 0,
    left: "50%",
    width: 48,
    height: 60,
  },
  frame3: {
    width: 69,
    height: 170,
    marginTop: 128,
    overflow: "hidden",
  },
  container: {
    paddingLeft: 60,
    paddingTop: Padding.p_xs,
    paddingRight: 61,
    paddingBottom: Padding.p_xs,
  },
  iconLayout: {
    maxHeight: 30,
    maxWidth: 15,
    marginLeft:10,
    marginTop:10,
    overflow: "hidden",
  },
  loginCodePageloginverify: {
    backgroundColor: Color.white,
    flex: 1,
    width: "100%",
  },
});

export default LoginCodePageloginverify;
