import { Color } from "@constants/color";

export const setBgStyle = ({ Style, bg }: any) => {
  if (bg) {
    switch (bg) {
      case "primary":
        Style["backgroundColor"] = Color.primary;
        break;
      case "black":
        Style["backgroundColor"] = Color.black;
        break;
      case "white":
        Style["backgroundColor"] = Color.white;
        break;
      case "gray1":
        Style["backgroundColor"] = Color.gray1;
        break;
      case "gray2":
        Style["backgroundColor"] = Color.gray2;
        break;
      case "gray3":
        Style["backgroundColor"] = Color.gray3;
        break;
      case "gray4":
        Style["backgroundColor"] = Color.gray4;
        break;
      case "gray5":
        Style["backgroundColor"] = Color.gray5;
      default:
        Style["backgroundColor"] = bg;
        break;
    }
  }
  return Style;
};

export const setPositionStyle = ({
  Style,
  pos,
  left,
  right,
  top,
  bottom,
}: any) => {
  if (pos) Style["position"] = pos;
  if (top) Style["top"] = top;
  if (bottom) Style["bottom"] = bottom;
  if (left) Style["left"] = left;
  if (right) Style["right"] = right;
  return Style;
};

export const setFlexStyle = ({
  Style,
  f,
  flex,
  wrap,
  align,
  justify,
  row,
  col,
}: any) => {
  // shadow
  if (f) Style["flex"] = f;
  if (flex) Style["flex"] = flex;
  if (wrap) Style["flexWrap"] = wrap;
  if (align) Style["alignItems"] = align;
  if (justify) Style["justifyContent"] = justify;
  if (row) Style["flexDirection"] = "row";
  if (col) Style["flexDirection"] = "column";

  return Style;
};

export const setShadowStyle = ({ Style, shadow }: any) => {
  // shadow
  if (shadow === "sm") {
    Style["elevation"] = 3;
    Style["shadowColor"] = "#000";
    Style["shadowOffset"] = { width: 0, height: 1 };
    Style["shadowOpacity"] = 0.22;
    Style["shadowRadius"] = 2.22;
  }
  if (shadow === "md") {
    Style["elevation"] = 6;
    Style["shadowColor"] = "#000";
    Style["shadowOffset"] = { width: 0, height: 3 };
    Style["shadowOpacity"] = 0.27;
    Style["shadowRadius"] = 4.65;
  }
  if (shadow === "lg") {
    Style["elevation"] = 9;
    Style["shadowColor"] = "#000";
    Style["shadowOffset"] = { width: 0, height: 4 };
    Style["shadowOpacity"] = 0.32;
    Style["shadowRadius"] = 5.46;
  }
  return Style;
};

export const setSizeStyle = ({
  Style,
  w,
  width,
  h,
  height,
  minH,
  minW,
  maxH,
  maxW,
}: any) => {
  if (w === "full") Style["width"] = "100%";
  if (w && w !== "full") Style["width"] = parseInt(w as string);
  if (width === "full") Style["width"] = "100%";
  if (width && width !== "full") Style["width"] = parseInt(w as string);
  if (h === "full") Style["height"] = "100%";
  if (h && h !== "full") Style["height"] = parseInt(h as string);
  if (height === "full") Style["height"] = "100%";
  if (height && height !== "full") Style["height"] = parseInt(h as string);
  if (minH) Style["minHeight"] = minH;
  if (minW) Style["minWidth"] = minW;
  if (maxH) Style["maxHeight"] = maxH;
  if (maxW) Style["maxWidth"] = maxW;
  return Style;
};

export const setSpaceStyle = ({
  Style,
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
}: any) => {
  // border
  // padding
  if (p) Style["padding"] = parseInt(p as string);
  if (pt) Style["paddingTop"] = parseInt(pt as string);
  if (pb) Style["paddingBottom"] = parseInt(pb as string);
  if (pr) Style["paddingRight"] = parseInt(pr as string);
  if (pl) Style["paddingLeft"] = parseInt(pl as string);
  if (py) Style["paddingVertical"] = parseInt(py as string);
  if (px) Style["paddingHorizontal"] = parseInt(px as string);

  // margin
  if (m) Style["margin"] = parseInt(m as string);
  if (mt) Style["marginTop"] = parseInt(mt as string);
  if (mb) Style["marginBottom"] = parseInt(mb as string);
  if (mr) Style["marginRight"] = parseInt(mr as string);
  if (ml) Style["marginLeft"] = parseInt(ml as string);
  if (my) Style["marginVertical"] = parseInt(my as string);
  if (mx) Style["marginHorizontal"] = parseInt(mx as string);
  return Style;
};

export const setBorderStyle = ({
  Style,
  border,
  borderTop,
  borderBot,
  borderLeft,
  borderRight,
  borderWidth,
  borderStyle,
  borderColor,
  round,
  roundBotLeft,
  roundBotRight,
  roundTopLeft,
  roundTopRight,
}: any) => {
  // border
  if (border) {
    const [w, c] = border.split(" ");
    Style["borderWidth"] = parseInt(w);
    switch (c) {
      case "primary":
        Style["borderColor"] = Color.primary;
        break;
      case "black":
        Style["borderColor"] = Color.black;
        break;
      case "white":
        Style["borderColor"] = Color.white;
        break;
      case "gray1":
        Style["borderColor"] = Color.gray1;
        break;
      case "gray2":
        Style["borderColor"] = Color.gray2;
        break;
      case "gray3":
        Style["borderColor"] = Color.gray3;
        break;
      case "gray4":
        Style["borderColor"] = Color.gray4;
        break;
      case "gray5":
        Style["borderColor"] = Color.gray5;
      default:
        Style["borderColor"] = c;
        break;
    }
  }
  if (borderTop) {
    const [w, c] = borderTop.split(" ");
    Style["borderTopWidth"] = parseInt(w);
    switch (c) {
      case "primary":
        Style["borderTopColor"] = Color.primary;
        break;
      case "black":
        Style["borderTopColor"] = Color.black;
        break;
      case "white":
        Style["borderTopColor"] = Color.white;
        break;
      case "gray1":
        Style["borderTopColor"] = Color.gray1;
        break;
      case "gray2":
        Style["borderTopColor"] = Color.gray2;
        break;
      case "gray3":
        Style["borderTopColor"] = Color.gray3;
        break;
      case "gray4":
        Style["borderTopColor"] = Color.gray4;
        break;
      case "gray5":
        Style["borderTopColor"] = Color.gray5;
        break;
      default:
        Style["borderTopColor"] = c;
    }
  }
  if (borderBot) {
    const [w, c] = borderBot.split(" ");
    Style["borderBottomWidth"] = parseInt(w);
    switch (c) {
      case "primary":
        Style["borderBottomColor"] = Color.primary;
        break;
      case "black":
        Style["borderBottomColor"] = Color.black;
        break;
      case "white":
        Style["borderBottomColor"] = Color.white;
        break;
      case "gray1":
        Style["borderBottomColor"] = Color.gray1;
        break;
      case "gray2":
        Style["borderBottomColor"] = Color.gray2;
        break;
      case "gray3":
        Style["borderBottomColor"] = Color.gray3;
        break;
      case "gray4":
        Style["borderBottomColor"] = Color.gray4;
        break;
      case "gray5":
        Style["borderBottomColor"] = Color.gray5;
        break;
      default:
        Style["borderBottomColor"] = c;
    }
  }
  if (borderLeft) {
    const [w, c] = borderLeft.split(" ");
    Style["borderLeftWidth"] = parseInt(w);
    switch (c) {
      case "primary":
        Style["borderLeftColor"] = Color.primary;
        break;
      case "black":
        Style["borderLeftColor"] = Color.black;
        break;
      case "white":
        Style["borderLeftColor"] = Color.white;
        break;
      case "gray1":
        Style["borderLeftColor"] = Color.gray1;
        break;
      case "gray2":
        Style["borderLeftColor"] = Color.gray2;
        break;
      case "gray3":
        Style["borderLeftColor"] = Color.gray3;
        break;
      case "gray4":
        Style["borderLeftColor"] = Color.gray4;
        break;
      case "gray5":
        Style["borderLeftColor"] = Color.gray5;
        break;
      default:
        Style["borderLeftColor"] = c;
    }
  }
  if (borderRight) {
    const [w, c] = borderRight.split(" ");
    Style["borderRightWidth"] = parseInt(w);
    switch (c) {
      case "primary":
        Style["borderRightColor"] = Color.primary;
        break;
      case "black":
        Style["borderRightColor"] = Color.black;
        break;
      case "white":
        Style["borderRightColor"] = Color.white;
        break;
      case "gray1":
        Style["borderRightColor"] = Color.gray1;
        break;
      case "gray2":
        Style["borderRightColor"] = Color.gray2;
        break;
      case "gray3":
        Style["borderRightColor"] = Color.gray3;
        break;
      case "gray4":
        Style["borderRightColor"] = Color.gray4;
        break;
      case "gray5":
        Style["borderRightColor"] = Color.gray5;
        break;
      default:
        Style["borderRightColor"] = c;
    }
  }
  if (borderWidth) Style["borderWidth"] = borderWidth;
  if (borderStyle) Style["borderStyle"] = borderStyle;
  if (borderColor) Style["borderColor"] = borderColor;

  if (round) {
    Style["borderRadius"] = parseInt(round as string);
  }
  if (roundBotLeft) {
    Style["borderBottomLeftRadius"] = parseInt(roundBotLeft as string);
  }
  if (roundBotRight) {
    Style["borderBottomRightRadius"] = parseInt(roundBotRight as string);
  }
  if (roundTopLeft) {
    Style["borderTopLeftRadius"] = parseInt(roundTopLeft as string);
  }
  if (roundTopRight) {
    Style["borderTopRightRadius"] = parseInt(roundTopRight as string);
  }

  return Style;
};
