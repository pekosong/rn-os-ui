import React from "react";
import {
  SafeAreaView,
  View as BaseView,
  ViewProps,
  ViewStyle,
  StyleProp,
} from "react-native";
import { Color } from "../contants/color";
import { ExtendStyle } from "../type/style";
import { SafeAreaViewProps } from "react-native-safe-area-context";

interface Props extends ViewProps, SafeAreaViewProps, ViewStyle, ExtendStyle {
  d?: "none" | "flex";
  bg?: string | undefined;
  safe?: boolean;
}

const View: React.FC<Props> = ({
  //base
  d,
  bg,
  safe,
  shadow,
  overflow,
  opacity,
  zIndex,
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
  //flex
  f,
  align,
  justify,
  row,
  col,
  //size
  w,
  h,
  minH,
  minW,
  maxH,
  maxW,
  //position
  pos,
  left,
  right,
  top,
  bottom,
  //border
  border,
  borderTop,
  borderBot,
  borderLeft,
  borderRight,
  borderColor,
  borderWidth,
  borderStyle,
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
  const ViewStyle: StyleProp<ViewStyle> = {};

  // view Style
  if (d) ViewStyle["display"] = d;
  if (bg) ViewStyle["backgroundColor"] = bg;
  if (bg === "primary") ViewStyle["backgroundColor"] = Color.primary;
  if (bg === "black") ViewStyle["backgroundColor"] = Color.black;
  if (bg === "white") ViewStyle["backgroundColor"] = Color.white;
  if (bg === "gray1") ViewStyle["backgroundColor"] = Color.gray1;
  if (bg === "gray2") ViewStyle["backgroundColor"] = Color.gray2;
  if (bg === "gray3") ViewStyle["backgroundColor"] = Color.gray3;
  if (bg === "gray4") ViewStyle["backgroundColor"] = Color.gray4;
  if (bg === "gray5") ViewStyle["backgroundColor"] = Color.gray5;

  // shadow
  if (shadow === "sm") {
    ViewStyle["elevation"] = 3;
    ViewStyle["shadowColor"] = "#000";
    ViewStyle["shadowOffset"] = { width: 0, height: 1 };
    ViewStyle["shadowOpacity"] = 0.22;
    ViewStyle["shadowRadius"] = 2.22;
  }
  if (shadow === "md") {
    ViewStyle["elevation"] = 6;
    ViewStyle["shadowColor"] = "#000";
    ViewStyle["shadowOffset"] = { width: 0, height: 3 };
    ViewStyle["shadowOpacity"] = 0.27;
    ViewStyle["shadowRadius"] = 4.65;
  }
  if (shadow === "lg") {
    ViewStyle["elevation"] = 9;
    ViewStyle["shadowColor"] = "#000";
    ViewStyle["shadowOffset"] = { width: 0, height: 4 };
    ViewStyle["shadowOpacity"] = 0.32;
    ViewStyle["shadowRadius"] = 5.46;
  }
  if (opacity) ViewStyle["opacity"] = opacity;
  if (zIndex) ViewStyle["zIndex"] = zIndex;
  if (overflow) ViewStyle["overflow"] = overflow;

  // flex
  if (f) ViewStyle["flex"] = f;
  if (align) ViewStyle["alignItems"] = align;
  if (justify) ViewStyle["justifyContent"] = justify;
  if (row) ViewStyle["flexDirection"] = "row";
  if (col) ViewStyle["flexDirection"] = "column";

  // width, height
  if (w === "full") ViewStyle["width"] = "100%";
  if (w && w !== "full") ViewStyle["width"] = parseInt(w as string);
  if (h === "full") ViewStyle["height"] = "100%";
  if (h && h !== "full") ViewStyle["height"] = parseInt(h as string);
  if (minH) ViewStyle["minHeight"] = minH;
  if (minW) ViewStyle["minWidth"] = minW;
  if (maxH) ViewStyle["maxHeight"] = maxH;
  if (maxW) ViewStyle["maxWidth"] = maxW;

  // position
  if (pos) ViewStyle["position"] = pos;
  if (top) ViewStyle["top"] = top;
  if (bottom) ViewStyle["bottom"] = bottom;
  if (left) ViewStyle["left"] = left;
  if (right) ViewStyle["right"] = right;

  // border
  if (border) {
    const [w, c] = border.split(" ");
    ViewStyle["borderWidth"] = parseInt(w);
    ViewStyle["borderColor"] = c === "primary" ? "red" : c;
  }
  if (borderTop) {
    const [w, c] = borderTop.split(" ");
    ViewStyle["borderTopWidth"] = parseInt(w);
    ViewStyle["borderTopColor"] = c === "primary" ? "red" : c;
  }

  if (borderBot) {
    const [w, c] = borderBot.split(" ");
    ViewStyle["borderBottomWidth"] = parseInt(w);
    ViewStyle["borderBottomColor"] = c === "primary" ? "red" : c;
  }
  if (borderLeft) {
    const [w, c] = borderLeft.split(" ");
    ViewStyle["borderLeftWidth"] = parseInt(w);
    ViewStyle["borderLeftColor"] = c === "primary" ? "red" : c;
  }
  if (borderRight) {
    const [w, c] = borderRight.split(" ");
    ViewStyle["borderRightWidth"] = parseInt(w);
    ViewStyle["borderRightColor"] = c === "primary" ? "red" : c;
  }
  if (borderWidth) ViewStyle["borderWidth"] = borderWidth;
  if (borderStyle) ViewStyle["borderStyle"] = borderStyle;
  if (borderColor) ViewStyle["borderColor"] = borderColor;

  // border radius
  if (round) ViewStyle["borderRadius"] = parseInt(round as string);
  if (roundBotLeft)
    ViewStyle["borderBottomLeftRadius"] = parseInt(roundBotLeft as string);
  if (roundBotRight)
    ViewStyle["borderBottomRightRadius"] = parseInt(roundBotRight as string);
  if (roundTopLeft)
    ViewStyle["borderTopLeftRadius"] = parseInt(roundTopLeft as string);
  if (roundTopRight)
    ViewStyle["borderTopRightRadius"] = parseInt(roundTopRight as string);

  // padding
  if (p) ViewStyle["padding"] = parseInt(p as string);
  if (pt) ViewStyle["paddingTop"] = parseInt(pt as string);
  if (pb) ViewStyle["paddingBottom"] = parseInt(pb as string);
  if (pr) ViewStyle["paddingRight"] = parseInt(pr as string);
  if (pl) ViewStyle["paddingLeft"] = parseInt(pl as string);
  if (py) ViewStyle["paddingVertical"] = parseInt(py as string);
  if (px) ViewStyle["paddingHorizontal"] = parseInt(px as string);

  // margin
  if (m) ViewStyle["margin"] = parseInt(m as string);
  if (mt) ViewStyle["marginTop"] = parseInt(mt as string);
  if (mb) ViewStyle["marginBottom"] = parseInt(mb as string);
  if (mr) ViewStyle["marginRight"] = parseInt(mr as string);
  if (ml) ViewStyle["marginLeft"] = parseInt(ml as string);
  if (my) ViewStyle["marginVertical"] = parseInt(my as string);
  if (mx) ViewStyle["marginHorizontal"] = parseInt(mx as string);

  if (safe) {
    return (
      <SafeAreaView style={{ ...ViewStyle, ...(style as any) }} {...rest}>
        {children}
      </SafeAreaView>
    );
  }
  return (
    <BaseView style={{ ...ViewStyle, ...(style as any) }} {...rest}>
      {children}
    </BaseView>
  );
};

export default View;
