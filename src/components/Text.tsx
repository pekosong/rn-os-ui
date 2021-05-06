import React from "react";
import { Text as BaseText, TextProps, StyleProp } from "react-native";
import { ColorProp, TextStyle, PaddingProp, MarginProp } from "../types/style";
import { setColorStyle, setSpaceStyle } from "../utils/style";
import { useOsTheme } from "../contexts/useRnUi";

interface Props extends TextProps, TextStyle, PaddingProp, MarginProp {
  flex?: number;
  color?: ColorProp;
  size?: number | string;
  children: React.ReactNode;
}

const Text = React.forwardRef<BaseText, Props>((props, ref) => {
  const {
    size,
    flex,
    textAlign,
    fontWeight,
    fontStyle,
    fontFamily,
    letterSpacing,
    lineHeight,
    textDecorationLine,
    textDecorationStyle,
    style,
    children,
    ...rest
  } = props;

  const { theme } = useOsTheme();
  let Style: StyleProp<TextStyle> = {
    color: theme.black,
    fontSize: 14,
    fontWeight: "400",
  };

  if (flex) Style["flex"] = flex;
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

  Style = setColorStyle({ Style, theme, ...rest }) as TextStyle;
  Style = setSpaceStyle({ Style, ...rest }) as TextStyle;

  return (
    <BaseText ref={ref} style={{ ...Style, ...(style as any) }} {...rest}>
      {children}
    </BaseText>
  );
});

export default React.memo(Text);
