import React from "react";
import {
  TextInput as BaseTextInput,
  TextInputProps,
  TextProps,
  StyleProp,
} from "react-native";
import { ColorProp, TextStyle, ExtendStyle } from "../types/style";
import { Color } from "../constants/color";
import {
  setBgStyle,
  setPositionStyle,
  setSizeStyle,
  setBorderStyle,
  setSpaceStyle,
  setShadowStyle,
} from "../utils/style";

interface Props extends TextInputProps, TextProps, ExtendStyle {
  color?: ColorProp;
  size?: number | string | undefined;
}

const Text: React.FC<Props> = ({
  color,
  size,
  textAlign,
  children,
  style,
  ...rest
}) => {
  let Style: StyleProp<TextStyle> = {};

  // fontStyle
  if (size) Style["fontSize"] = parseInt(size as string);
  if (textAlign) Style["textAlign"] = textAlign;
  if (color === "primary") Style["color"] = Color.primary;
  if (color === "black") Style["color"] = Color.black;
  if (color === "white") Style["color"] = Color.white;
  if (color === "gray1") Style["color"] = Color.gray1;
  if (color === "gray2") Style["color"] = Color.gray2;
  if (color === "gray3") Style["color"] = Color.gray3;
  if (color === "gray4") Style["color"] = Color.gray4;
  if (color === "gray5") Style["color"] = Color.gray5;

  Style = setBgStyle({
    Style: Style,
    ...rest,
  }) as TextStyle;

  Style = setPositionStyle({
    Style: Style,
    ...rest,
  }) as TextStyle;

  Style = setSizeStyle({
    Style,
    ...rest,
  }) as TextStyle;

  Style = setShadowStyle({
    Style,
    ...rest,
  }) as TextStyle;

  Style = setBorderStyle({
    Style,
    ...rest,
  }) as TextStyle;

  Style = setSpaceStyle({
    Style,
    ...rest,
  }) as TextStyle;

  return (
    <BaseTextInput style={{ ...Style, ...(style as any) }} {...rest}>
      {children}
    </BaseTextInput>
  );
};

export default Text;
