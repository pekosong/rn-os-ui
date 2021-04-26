import React from "react";
import {
  SafeAreaView,
  View as BaseView,
  ViewProps,
  ViewStyle,
  StyleProp,
} from "react-native";
import { ExtendStyle } from "../types/style";
import { SafeAreaViewProps } from "react-native-safe-area-context";
import {
  setBgStyle,
  setPositionStyle,
  setFlexStyle,
  setSizeStyle,
  setShadowStyle,
  setBorderStyle,
  setSpaceStyle,
} from "../utils/style";

interface Props extends ViewProps, SafeAreaViewProps, ViewStyle, ExtendStyle {
  safe?: boolean;
}

const View: React.FC<Props> = ({
  //base
  d,
  display,
  overflow,
  opacity,
  zIndex,
  safe,
  //etc
  children,
  style,
  ...rest
}) => {
  let Style: StyleProp<ViewStyle> = {};

  // view Style
  if (d) Style["display"] = d;
  if (display) Style["display"] = display;
  if (opacity) Style["opacity"] = opacity;
  if (zIndex) Style["zIndex"] = zIndex;
  if (overflow) Style["overflow"] = overflow;

  Style = setBgStyle({
    Style: Style,
    ...rest,
  }) as ViewStyle;

  Style = setPositionStyle({
    Style: Style,
    ...rest,
  }) as ViewStyle;

  Style = setFlexStyle({
    Style,
    ...rest,
  }) as ViewStyle;

  Style = setSizeStyle({
    Style,
    ...rest,
  }) as ViewStyle;

  Style = setShadowStyle({
    Style,
    ...rest,
  }) as ViewStyle;

  Style = setBorderStyle({
    Style,
    ...rest,
  }) as ViewStyle;

  Style = setSpaceStyle({
    Style,
    ...rest,
  }) as ViewStyle;

  if (safe) {
    return (
      <SafeAreaView style={{ ...Style, ...(style as any) }} {...rest}>
        {children}
      </SafeAreaView>
    );
  }
  return (
    <BaseView style={{ ...Style, ...(style as any) }} {...rest}>
      {children}
    </BaseView>
  );
};

export default View;
