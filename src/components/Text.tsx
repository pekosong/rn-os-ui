import React from "react";
import {
  Text as BaseText,
  TextProps,
  TextStyle,
  StyleProp,
} from "react-native";
import { ColoProps, PaddingProp, MarginProp } from "../type/style";
import { setColorStyle } from "../utils/style";

interface Props
  extends TextProps,
    ColoProps,
    TextStyle,
    PaddingProp,
    MarginProp {
  size?: number | string | undefined;
}

const Text: React.FC<Props> = ({
  p,
  pt,
  pb,
  pr,
  pl,
  py,
  px,
  m,
  mt,
  mb,
  mr,
  ml,
  my,
  mx,
  col,
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
  ...rest
}) => {
  let style: StyleProp<TextStyle> = {};

  // Color
  if (col) style = setColorStyle(style, col);
  if (color) style["color"] = color;

  // fontStyle
  if (size) style["fontSize"] = parseInt(size as string);
  if (fontFamily) style["fontFamily"] = fontFamily;
  if (fontWeight) style["fontWeight"] = fontWeight;
  if (fontStyle) style["fontStyle"] = fontStyle;
  if (textAlign) style["textAlign"] = textAlign;
  if (letterSpacing) style["letterSpacing"] = letterSpacing;
  if (lineHeight) style["lineHeight"] = lineHeight;
  if (textDecorationLine) style["textDecorationLine"] = textDecorationLine;
  if (textDecorationStyle) style["textDecorationStyle"] = textDecorationStyle;

  // padding
  if (p) style["padding"] = parseInt(p as string);
  if (pt) style["paddingTop"] = parseInt(pt as string);
  if (pb) style["paddingBottom"] = parseInt(pb as string);
  if (pr) style["paddingRight"] = parseInt(pr as string);
  if (pl) style["paddingLeft"] = parseInt(pl as string);
  if (py) style["paddingVertical"] = parseInt(py as string);
  if (px) style["paddingHorizontal"] = parseInt(px as string);

  // margin
  if (m) style["margin"] = parseInt(m as string);
  if (mt) style["marginTop"] = parseInt(mt as string);
  if (mb) style["marginBottom"] = parseInt(mb as string);
  if (mr) style["marginRight"] = parseInt(mr as string);
  if (ml) style["marginLeft"] = parseInt(ml as string);
  if (my) style["marginVertical"] = parseInt(my as string);
  if (mx) style["marginHorizontal"] = parseInt(mx as string);

  return (
    <BaseText style={style} {...rest}>
      {children}
    </BaseText>
  );
};

export default Text;
