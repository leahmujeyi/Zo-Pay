import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View } from "react-native";
import { Padding } from "../GlobalStyles";

const ZoPayLogoAsseticon = () => {
  return (
    <View style={styles.zoPayLogoAsseticon}>
      <Image
        style={styles.symbolIcon}
        contentFit="cover"
        source={require("../assets/symbol.png")}
      />
      <Image
        style={styles.zopayIcon}
        contentFit="cover"
        source={require("../assets/zopay.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  symbolIcon: {
    width: 84,
    height: 97,
  },
  zopayIcon: {
    alignSelf: "stretch",
    maxWidth: "100%",
    overflow: "hidden",
    height: 41,
    width: "100%",
    marginTop: -5,
  },
  zoPayLogoAsseticon: {
    width: 150,
    paddingHorizontal: Padding.p_xs,
    paddingVertical: 0,
    alignItems: "center",
    justifyContent: "flex-end",
  },
});

export default ZoPayLogoAsseticon;
