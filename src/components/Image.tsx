import React from "react";
import {
  Image as BaseImage,
  ImageProps,
  ImageStyle,
  StyleProp,
} from "react-native";
import { ExtendStyle } from "../types/style";
import { Color } from "../constants/color";
import { setSizeStyle, setSpaceStyle } from "../utils/style";

interface Props extends ImageProps, ExtendStyle {
  d?: "none" | "flex";
  display?: "none" | "flex";
  resize?: "cover" | "contain" | "stretch" | "repeat" | "center";
}

const Image: React.FC<Props> = ({
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
}) => {
  let ImageStyle: StyleProp<ImageStyle> = {};

  // image Style
  if (d) ImageStyle["display"] = d;
  if (display) ImageStyle["display"] = display;
  if (resize) ImageStyle["resizeMode"] = resize;
  // position
  if (pos) ImageStyle["position"] = pos;

  // border
  if (border) {
    const [w, c] = border.split(" ");
    ImageStyle["borderWidth"] = parseInt(w);
    ImageStyle["borderColor"] = c === "primary" ? Color.primary : c;
  }
  if (borderTop) {
    ImageStyle["borderTopWidth"] = parseInt(borderTop.split(" ")[0]);
  }
  if (borderBot) {
    ImageStyle["borderBottomWidth"] = parseInt(borderBot.split(" ")[0]);
  }
  if (borderLeft) {
    ImageStyle["borderLeftWidth"] = parseInt(borderLeft.split(" ")[0]);
  }
  if (borderRight) {
    ImageStyle["borderRightWidth"] = parseInt(borderRight.split(" ")[0]);
  }
  if (borderWidth) ImageStyle["borderWidth"] = borderWidth;
  if (borderColor) ImageStyle["borderColor"] = borderColor;
  // border radius
  if (round) ImageStyle["borderRadius"] = parseInt(round as string);
  if (roundBotLeft)
    ImageStyle["borderBottomLeftRadius"] = parseInt(roundBotLeft as string);
  if (roundBotRight)
    ImageStyle["borderBottomRightRadius"] = parseInt(roundBotRight as string);
  if (roundTopLeft)
    ImageStyle["borderTopLeftRadius"] = parseInt(roundTopLeft as string);
  if (roundTopRight)
    ImageStyle["borderTopRightRadius"] = parseInt(roundTopRight as string);

  ImageStyle = setSizeStyle({
    Style: ImageStyle,
    ...rest,
  }) as ImageStyle;

  ImageStyle = setSpaceStyle({
    Style: ImageStyle,
    ...rest,
  }) as ImageStyle;

  return (
    <BaseImage style={{ ...ImageStyle, ...(style as any) }} {...rest}>
      {children}
    </BaseImage>
  );
};

export default Image;
