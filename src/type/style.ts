import { ColorValue } from "react-native";

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

export interface FlexProp {
  f?: number | undefined;
  align?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "stretch"
    | "baseline"
    | undefined;
  justify?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around"
    | "space-evenly"
    | undefined;
  row?: boolean;
  col?: boolean;
}

export interface BorderProp {
  border?: string | undefined;
  borderTop?: string | undefined;
  borderBot?: string | undefined;
  borderRight?: string | undefined;
  borderLeft?: string | undefined;
  borderColor?: ColorValue;
  borderWidth?: number;
  borderStyle?: "solid" | "dotted" | "dashed";
}

export interface RoundProp {
  round?: string | number | undefined;
  roundBotLeft?: string | number | undefined;
  roundBotRight?: string | number | undefined;
  roundTopLeft?: string | number | undefined;
  roundTopRight?: string | number | undefined;
}

export interface PositionProp {
  pos?: "absolute" | "relative";
  h?: "full" | string | number | undefined;
  w?: "full" | string | number | undefined;
  maxH?: number | string;
  maxW?: number | string;
  minH?: number | string;
  minW?: number | string;
}

export interface ShadowProps {
  shadow?: "sm" | "md" | "lg";
}
export interface ExtendStyle
  extends PaddingProp,
    MarginProp,
    FlexProp,
    BorderProp,
    RoundProp,
    PositionProp,
    ShadowProps {}

export interface ColoProps {
  col?:
    | "primary"
    | "black"
    | "white"
    | "gray1"
    | "gray2"
    | "gray3"
    | "gray4"
    | "gray5"
    | "gray.50"
    | "gray.100"
    | "gray.200"
    | "gray.300"
    | "gray.400"
    | "gray.500"
    | "gray.600"
    | "gray.700"
    | "gray.800"
    | "gray.900"
    | "red.50"
    | "red.100"
    | "red.200"
    | "red.300"
    | "red.400"
    | "red.500"
    | "red.600"
    | "red.700"
    | "red.800"
    | "red.900"
    | "blue.50"
    | "blue.100"
    | "blue.200"
    | "blue.300"
    | "blue.400"
    | "blue.500"
    | "blue.600"
    | "blue.700"
    | "blue.800"
    | "blue.900"
    | string;
}
