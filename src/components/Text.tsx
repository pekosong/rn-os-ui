import React from "react";
import { Text as BaseText, TextProps, StyleProp } from "react-native";
import { ColorProp, TextStyle, PaddingProp, MarginProp } from "../types/style";
import { Color } from "../constants/color";
import { setSpaceStyle } from "../utils/style";

interface Props extends TextProps, TextStyle, PaddingProp, MarginProp {
  color?: ColorProp;
  size?: number | string | undefined;
}

const Text: React.FC<Props> = ({
  color,
  size,
  textAlign,
  fontWeight,
  fontStyle,
  fontFamily,
  letterSpacing,
  lineHeight,
  textDecorationLine,
  textDecorationStyle,
  children,
  style,
  ...rest
}) => {
  let Style: StyleProp<TextStyle> = {
    color: Color.black,
    fontSize: 14,
    fontWeight: "400",
  };

  // Color
  if (color === "primary") Style["color"] = Color.primary;
  if (color === "black") Style["color"] = Color.black;
  if (color === "white") Style["color"] = Color.white;
  if (color === "gray1") Style["color"] = Color.gray1;
  if (color === "gray2") Style["color"] = Color.gray2;
  if (color === "gray3") Style["color"] = Color.gray3;
  if (color === "gray4") Style["color"] = Color.gray4;
  if (color === "gray5") Style["color"] = Color.gray5;

  // fontStyle
  if (size) Style["fontSize"] = parseInt(size as string);
  if (fontFamily) Style["fontFamily"] = fontFamily;
  if (fontWeight) Style["fontWeight"] = fontWeight;
  if (fontStyle) Style["fontStyle"] = fontStyle;
  if (textAlign) Style["textAlign"] = textAlign;
  if (letterSpacing) Style["letterSpacing"] = letterSpacing;
  if (lineHeight) Style["lineHeight"] = lineHeight;
  if (textDecorationLine) Style["textDecorationLine"] = textDecorationLine;
  if (textDecorationStyle) Style["textDecorationStyle"] = textDecorationStyle;

  Style = setSpaceStyle({
    Style,
    ...rest,
  }) as TextStyle;

  return (
    <BaseText style={{ ...Style, ...(style as any) }} {...rest}>
      {children}
    </BaseText>
  );
};

export default Text;
