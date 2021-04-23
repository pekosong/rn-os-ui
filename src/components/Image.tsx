import React from "react";
import {
  Image as BaseImage,
  ImageProps,
  ImageStyle,
  StyleProp,
} from "react-native";
import { ExtendStyle } from "../type/style";
import { Color } from "../constants/color";

interface Props extends ImageProps, ExtendStyle {
  d?: "none" | "flex";
  resize?: "cover" | "contain" | "stretch" | "repeat" | "center";
}

const Image: React.FC<Props> = ({
  //base
  d,
  resize,
  //padding
  p,
  pt,
  pb,
  pr,
  pl,
  py,
  px,
  //margin
  m,
  mt,
  mb,
  mr,
  ml,
  my,
  mx,
  //size
  w,
  h,
  minH,
  minW,
  maxH,
  maxW,
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
  const ImageStyle: StyleProp<ImageStyle> = {};

  // image Style
  if (d) ImageStyle["display"] = d;
  if (resize) ImageStyle["resizeMode"] = resize;

  // width, height
  if (w === "full") ImageStyle["width"] = "100%";
  if (w && w !== "full") ImageStyle["width"] = parseInt(w as string);
  if (h === "full") ImageStyle["height"] = "100%";
  if (h && h !== "full") ImageStyle["height"] = parseInt(h as string);
  if (minH) ImageStyle["minHeight"] = minH;
  if (minW) ImageStyle["minWidth"] = minW;
  if (maxH) ImageStyle["maxHeight"] = maxH;
  if (maxW) ImageStyle["maxWidth"] = maxW;

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

  // padding
  if (p) ImageStyle["padding"] = parseInt(p as string);
  if (pt) ImageStyle["paddingTop"] = parseInt(pt as string);
  if (pb) ImageStyle["paddingBottom"] = parseInt(pb as string);
  if (pr) ImageStyle["paddingRight"] = parseInt(pr as string);
  if (pl) ImageStyle["paddingLeft"] = parseInt(pl as string);
  if (py) ImageStyle["paddingVertical"] = parseInt(py as string);
  if (px) ImageStyle["paddingHorizontal"] = parseInt(px as string);

  // margin
  if (m) ImageStyle["margin"] = parseInt(m as string);
  if (mt) ImageStyle["marginTop"] = parseInt(mt as string);
  if (mb) ImageStyle["marginBottom"] = parseInt(mb as string);
  if (mr) ImageStyle["marginRight"] = parseInt(mr as string);
  if (ml) ImageStyle["marginLeft"] = parseInt(ml as string);
  if (my) ImageStyle["marginVertical"] = parseInt(my as string);
  if (mx) ImageStyle["marginHorizontal"] = parseInt(mx as string);

  return (
    <BaseImage style={{ ...ImageStyle, ...(style as any) }} {...rest}>
      {children}
    </BaseImage>
  );
};

export default Image;
