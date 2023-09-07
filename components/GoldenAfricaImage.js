import React, { useMemo } from "react";
import { Image } from "expo-image";
import { StyleSheet, ImageSourcePropType } from "react-native";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const GoldenAfricaImage = ({
  dimensionCode,
  propPosition,
  propHeight,
  propWidth,
  propTop,
  propRight,
  propBottom,
  propLeft,
  propMaxWidth,
  propOverflow,
  propMaxHeight,
  propMarginLeft,
}) => {
  const goldenAfricaImageStyle = useMemo(() => {
    return {
      ...getStyleValue("position", propPosition),
      ...getStyleValue("height", propHeight),
      ...getStyleValue("width", propWidth),
      ...getStyleValue("top", propTop),
      ...getStyleValue("right", propRight),
      ...getStyleValue("bottom", propBottom),
      ...getStyleValue("left", propLeft),
      ...getStyleValue("maxWidth", propMaxWidth),
      ...getStyleValue("overflow", propOverflow),
      ...getStyleValue("maxHeight", propMaxHeight),
      ...getStyleValue("marginLeft", propMarginLeft),
    };
  }, [
    propPosition,
    propHeight,
    propWidth,
    propTop,
    propRight,
    propBottom,
    propLeft,
    propMaxWidth,
    propOverflow,
    propMaxHeight,
    propMarginLeft,
  ]);

  return (
    <Image
      style={[styles.goldenAfricaImage, goldenAfricaImageStyle]}
      contentFit="cover"
      source={dimensionCode}
    />
  );
};

const styles = StyleSheet.create({
  goldenAfricaImage: {
    position: "absolute",
    height: "35.29%",
    width: "100%",
    top: "64.71%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
});

export default GoldenAfricaImage;
