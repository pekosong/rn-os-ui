export const setColorStyle = ({ Style, theme, color }: any) => {
  if (color) {
    switch (color) {
      case "primary":
        Style["color"] = theme.primary;
        break;
      case "black":
        Style["color"] = theme.black;
        break;
      case "white":
        Style["color"] = theme.white;
        break;
      case "gray1":
        Style["color"] = theme.gray1;
        break;
      case "gray2":
        Style["color"] = theme.gray2;
        break;
      case "gray3":
        Style["color"] = theme.gray3;
        break;
      case "gray4":
        Style["color"] = theme.gray4;
        break;
      case "gray5":
        Style["color"] = theme.gray5;
      default:
        Style["color"] = color;
        break;
    }
  }
  return Style;
};

export const setBgStyle = ({ Style, theme, bg }: any) => {
  if (bg) {
    switch (bg) {
      case "primary":
        Style["backgroundColor"] = theme.primary;
        break;
      case "black":
        Style["backgroundColor"] = theme.black;
        break;
      case "white":
        Style["backgroundColor"] = theme.white;
        break;
      case "gray1":
        Style["backgroundColor"] = theme.gray1;
        break;
      case "gray2":
        Style["backgroundColor"] = theme.gray2;
        break;
      case "gray3":
        Style["backgroundColor"] = theme.gray3;
        break;
      case "gray4":
        Style["backgroundColor"] = theme.gray4;
        break;
      case "gray5":
        Style["backgroundColor"] = theme.gray5;
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
  theme,
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
        Style["borderColor"] = theme.primary;
        break;
      case "black":
        Style["borderColor"] = theme.black;
        break;
      case "white":
        Style["borderColor"] = theme.white;
        break;
      case "gray1":
        Style["borderColor"] = theme.gray1;
        break;
      case "gray2":
        Style["borderColor"] = theme.gray2;
        break;
      case "gray3":
        Style["borderColor"] = theme.gray3;
        break;
      case "gray4":
        Style["borderColor"] = theme.gray4;
        break;
      case "gray5":
        Style["borderColor"] = theme.gray5;
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
        Style["borderTopColor"] = theme.primary;
        break;
      case "black":
        Style["borderTopColor"] = theme.black;
        break;
      case "white":
        Style["borderTopColor"] = theme.white;
        break;
      case "gray1":
        Style["borderTopColor"] = theme.gray1;
        break;
      case "gray2":
        Style["borderTopColor"] = theme.gray2;
        break;
      case "gray3":
        Style["borderTopColor"] = theme.gray3;
        break;
      case "gray4":
        Style["borderTopColor"] = theme.gray4;
        break;
      case "gray5":
        Style["borderTopColor"] = theme.gray5;
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
        Style["borderBottomColor"] = theme.primary;
        break;
      case "black":
        Style["borderBottomColor"] = theme.black;
        break;
      case "white":
        Style["borderBottomColor"] = theme.white;
        break;
      case "gray1":
        Style["borderBottomColor"] = theme.gray1;
        break;
      case "gray2":
        Style["borderBottomColor"] = theme.gray2;
        break;
      case "gray3":
        Style["borderBottomColor"] = theme.gray3;
        break;
      case "gray4":
        Style["borderBottomColor"] = theme.gray4;
        break;
      case "gray5":
        Style["borderBottomColor"] = theme.gray5;
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
        Style["borderLeftColor"] = theme.primary;
        break;
      case "black":
        Style["borderLeftColor"] = theme.black;
        break;
      case "white":
        Style["borderLeftColor"] = theme.white;
        break;
      case "gray1":
        Style["borderLeftColor"] = theme.gray1;
        break;
      case "gray2":
        Style["borderLeftColor"] = theme.gray2;
        break;
      case "gray3":
        Style["borderLeftColor"] = theme.gray3;
        break;
      case "gray4":
        Style["borderLeftColor"] = theme.gray4;
        break;
      case "gray5":
        Style["borderLeftColor"] = theme.gray5;
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
        Style["borderRightColor"] = theme.primary;
        break;
      case "black":
        Style["borderRightColor"] = theme.black;
        break;
      case "white":
        Style["borderRightColor"] = theme.white;
        break;
      case "gray1":
        Style["borderRightColor"] = theme.gray1;
        break;
      case "gray2":
        Style["borderRightColor"] = theme.gray2;
        break;
      case "gray3":
        Style["borderRightColor"] = theme.gray3;
        break;
      case "gray4":
        Style["borderRightColor"] = theme.gray4;
        break;
      case "gray5":
        Style["borderRightColor"] = theme.gray5;
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
