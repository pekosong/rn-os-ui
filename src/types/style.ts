import {
  ColorValue,
  TextStyleAndroid,
  TextStyleIOS,
  ViewStyle,
} from "react-native";

export type ColorProp =
  | "primary"
  | "black"
  | "white"
  | "gray1"
  | "gray2"
  | "gray3"
  | "gray4"
  | "gray5"
  | string;

export interface PaddingProp {
  p?: string | number;
  pt?: string | number;
  pb?: string | number;
  pr?: string | number;
  pl?: string | number;
  py?: string | number;
  px?: string | number;
}

export interface MarginProp {
  m?: string | number;
  mt?: string | number;
  mb?: string | number;
  mr?: string | number;
  ml?: string | number;
  my?: string | number;
  mx?: string | number;
}

type FlexAlignType =
  | "flex-start"
  | "flex-end"
  | "center"
  | "stretch"
  | "baseline";

export interface FlexProp {
  f?: number;
  align?: FlexAlignType;
  justify?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around"
    | "space-evenly";
  row?: boolean;
  col?: boolean;
  wrap?: "wrap" | "nowrap" | "wrap-reverse";
}

export interface BorderProp {
  border?: string;
  borderTop?: string;
  borderBot?: string;
  borderRight?: string;
  borderLeft?: string;
  borderColor?: ColorValue;
  borderWidth?: number;
  borderStyle?: "solid" | "dotted" | "dashed";
}

export interface RoundProp {
  round?: string | number;
  roundBotLeft?: string | number;
  roundBotRight?: string | number;
  roundTopLeft?: string | number;
  roundTopRight?: string | number;
}

export interface PositionProp {
  pos?: "absolute" | "relative";
  h?: "full" | string | number;
  w?: "full" | string | number;
  maxH?: number | string;
  maxW?: number | string;
  minH?: number | string;
  minW?: number | string;
  right?: number | string;
  top?: number | string;
  left?: number | string;
  bottom?: number | string;
}

export interface ExtendStyle
  extends PaddingProp,
    MarginProp,
    FlexProp,
    BorderProp,
    RoundProp,
    PositionProp {
  bg?: ColorProp;
  d?: "none" | "flex";
  shadow?: "sm" | "md" | "lg";
}

export interface TextStyle extends TextStyleIOS, TextStyleAndroid, ViewStyle {
  color?: ColorProp;
  fontFamily?: string;
  fontSize?: number;
  fontStyle?: "normal" | "italic";
  fontWeight?:
    | "normal"
    | "bold"
    | "100"
    | "200"
    | "300"
    | "400"
    | "500"
    | "600"
    | "700"
    | "800"
    | "900";
  letterSpacing?: number;
  lineHeight?: number;
  textAlign?: "auto" | "left" | "right" | "center" | "justify";
  textDecorationLine?:
    | "none"
    | "underline"
    | "line-through"
    | "underline line-through";
  textDecorationStyle?: "solid" | "double" | "dotted" | "dashed";
  textDecorationColor?: ColorValue;
  textShadowColor?: ColorValue;
  textShadowOffset?: { width: number; height: number };
  textShadowRadius?: number;
  textTransform?: "none" | "capitalize" | "uppercase" | "lowercase";
  testID?: string;
}
