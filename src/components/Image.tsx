import React from "react";
import {
  Image as BaseImage,
  ImageProps,
  ImageStyle,
  StyleProp,
} from "react-native";
import { ExtendStyle } from "../types/style";
import { setSizeStyle, setSpaceStyle } from "../utils/style";
import { useOsTheme } from "../contexts/useRnUi";

interface Props extends ImageProps, ExtendStyle {
  d?: "none" | "flex";
  display?: "none" | "flex";
  resize?: "cover" | "contain" | "stretch" | "repeat" | "center";
}

const Image: React.FC<Props> = (props) => {
  const {
    //base
    d,
    display,
    resize,
    //position
    pos,
    //border
    border,
    borderTop,
    borderBot,
    borderLeft,
    borderRight,
    borderColor,
    borderWidth,
    //round
    round,
    roundBotLeft,
    roundBotRight,
    roundTopLeft,
    roundTopRight,
    //etc
    children,
    style,
    ...rest
  } = props;

  const { theme } = useOsTheme();
  let Style: StyleProp<ImageStyle> = {};

  // base
  if (d) Style["display"] = d;
  if (display) Style["display"] = display;
  if (resize) Style["resizeMode"] = resize;

  // position
  if (pos) Style["position"] = pos;

  // border
  if (border) {
    const [w, c] = border.split(" ");
    Style["borderWidth"] = parseInt(w);
    Style["borderColor"] = c === "primary" ? theme.primary : c;
  }
  if (borderTop) {
    Style["borderTopWidth"] = parseInt(borderTop.split(" ")[0]);
  }
  if (borderBot) {
    Style["borderBottomWidth"] = parseInt(borderBot.split(" ")[0]);
  }
  if (borderLeft) {
    Style["borderLeftWidth"] = parseInt(borderLeft.split(" ")[0]);
  }
  if (borderRight) {
    Style["borderRightWidth"] = parseInt(borderRight.split(" ")[0]);
  }
  if (borderWidth) Style["borderWidth"] = borderWidth;
  if (borderColor) Style["borderColor"] = borderColor;

  // round
  if (round) Style["borderRadius"] = parseInt(round as string);
  if (roundBotLeft)
    Style["borderBottomLeftRadius"] = parseInt(roundBotLeft as string);
  if (roundBotRight)
    Style["borderBottomRightRadius"] = parseInt(roundBotRight as string);
  if (roundTopLeft)
    Style["borderTopLeftRadius"] = parseInt(roundTopLeft as string);
  if (roundTopRight)
    Style["borderTopRightRadius"] = parseInt(roundTopRight as string);

  Style = setSizeStyle({ Style, ...rest }) as ImageStyle;
  Style = setSpaceStyle({ Style, ...rest }) as ImageStyle;

  return (
    <BaseImage style={{ ...Style, ...(style as any) }} {...rest}>
      {children}
    </BaseImage>
  );
};

export default Image;
