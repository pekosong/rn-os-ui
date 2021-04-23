import { TextStyle } from "react-native";
import { Color, Gray, Red, Blue } from "../constants/color";

export const setColorStyle: (style: any, col: string) => TextStyle = (
  style,
  col
) => {
  if (col == "primary") style["color"] = Color.primary;
  if (col == "black") style["color"] = Color.black;
  if (col == "white") style["color"] = Color.white;
  if (col == "gray1") style["color"] = Color.gray1;
  if (col == "gray2") style["color"] = Color.gray2;
  if (col == "gray3") style["color"] = Color.gray3;
  if (col == "gray4") style["color"] = Color.gray4;
  if (col == "gray5") style["color"] = Color.gray5;

  if (col == "gray.50") style["color"] = Gray.gray50;
  if (col == "gray.100") style["color"] = Gray.gray100;
  if (col == "gray.200") style["color"] = Gray.gray200;
  if (col == "gray.300") style["color"] = Gray.gray300;
  if (col == "gray.400") style["color"] = Gray.gray400;
  if (col == "gray.500") style["color"] = Gray.gray500;
  if (col == "gray.600") style["color"] = Gray.gray600;
  if (col == "gray.700") style["color"] = Gray.gray700;
  if (col == "gray.800") style["color"] = Gray.gray800;
  if (col == "gray.900") style["color"] = Gray.gray900;

  if (col == "red.50") style["color"] = Red.red50;
  if (col == "red.100") style["color"] = Red.red100;
  if (col == "red.200") style["color"] = Red.red200;
  if (col == "red.300") style["color"] = Red.red300;
  if (col == "red.400") style["color"] = Red.red400;
  if (col == "red.500") style["color"] = Red.red500;
  if (col == "red.600") style["color"] = Red.red600;
  if (col == "red.700") style["color"] = Red.red700;
  if (col == "red.800") style["color"] = Red.red800;
  if (col == "red.900") style["color"] = Red.red900;

  if (col == "blue.50") style["color"] = Blue.blue50;
  if (col == "blue.100") style["color"] = Blue.blue100;
  if (col == "blue.200") style["color"] = Blue.blue200;
  if (col == "blue.300") style["color"] = Blue.blue300;
  if (col == "blue.400") style["color"] = Blue.blue400;
  if (col == "blue.500") style["color"] = Blue.blue500;
  if (col == "blue.600") style["color"] = Blue.blue600;
  if (col == "blue.700") style["color"] = Blue.blue700;
  if (col == "blue.800") style["color"] = Blue.blue800;
  if (col == "blue.900") style["color"] = Blue.blue900;
  return style;
};
