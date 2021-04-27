import React from "react";
import {
  TextInput as BaseTextInput,
  TextInputProps,
  TextProps,
  StyleProp,
} from "react-native";
import { ColorProp, TextStyle, ExtendStyle } from "../types/style";
import {
  setColorStyle,
  setBgStyle,
  setPositionStyle,
  setSizeStyle,
  setBorderStyle,
  setSpaceStyle,
  setShadowStyle,
} from "../utils/style";
import { useOsTheme } from "../contexts/useRnUi";

interface Props extends TextInputProps, TextProps, ExtendStyle {
  color?: ColorProp;
  size?: number | string | undefined;
}

const TextInput: React.FC<Props> = (props) => {
  const { size, textAlign, children, style, ...rest } = props;

  const { theme } = useOsTheme();
  let Style: StyleProp<TextStyle> = {};

  // fontStyle
  if (size) Style["fontSize"] = parseInt(size as string);
  if (textAlign) Style["textAlign"] = textAlign;

  Style = setColorStyle({ Style, theme, ...rest }) as TextStyle;
  Style = setBgStyle({ Style: Style, theme, ...rest }) as TextStyle;
  Style = setPositionStyle({ Style: Style, ...rest }) as TextStyle;
  Style = setSizeStyle({ Style, ...rest }) as TextStyle;
  Style = setShadowStyle({ Style, ...rest }) as TextStyle;
  Style = setBorderStyle({ Style, theme, ...rest }) as TextStyle;
  Style = setSpaceStyle({ Style, ...rest }) as TextStyle;

  return (
    <BaseTextInput style={{ ...Style, ...(style as any) }} {...rest}>
      {children}
    </BaseTextInput>
  );
};

export default TextInput;
