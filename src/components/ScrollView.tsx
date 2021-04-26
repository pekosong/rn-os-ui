import React from "react";
import {
  ScrollView as BaseScrollView,
  ScrollViewProps,
  ViewStyle,
  StyleProp,
} from "react-native";
import { ExtendStyle } from "@type/style";
import {
  setBgStyle,
  setPositionStyle,
  setFlexStyle,
  setSizeStyle,
  setShadowStyle,
  setSpaceStyle,
  setBorderStyle,
} from "@utils/style";
import { useOsTheme } from "@contexts/useRnUi";

interface Props extends ScrollViewProps, ViewStyle, ExtendStyle {}

const View: React.FC<Props> = ({
  //base
  d,
  display,
  overflow,
  opacity,
  zIndex,
  //etc
  children,
  style,
  contentContainerStyle,
  ...rest
}) => {
  const { theme } = useOsTheme();

  let ViewStyle: StyleProp<ViewStyle> = {};
  const ContentStyle: StyleProp<ViewStyle> = {};

  // view Style
  if (d) ViewStyle["display"] = d;
  if (display) ViewStyle["display"] = display;
  if (opacity) ViewStyle["opacity"] = opacity;
  if (zIndex) ViewStyle["zIndex"] = zIndex;
  if (overflow) ViewStyle["overflow"] = overflow;

  ViewStyle = setBgStyle({
    Style: ViewStyle,
    theme,
    ...rest,
  }) as ViewStyle;

  ViewStyle = setPositionStyle({
    Style: ViewStyle,
    ...rest,
  }) as ViewStyle;

  ViewStyle = setFlexStyle({
    Style: ViewStyle,
    ...rest,
  }) as ViewStyle;

  ViewStyle = setSizeStyle({
    Style: ViewStyle,
    ...rest,
  }) as ViewStyle;

  ViewStyle = setShadowStyle({
    Style: ViewStyle,
    ...rest,
  }) as ViewStyle;

  ViewStyle = setBorderStyle({
    Style: ViewStyle,
    theme,
    ...rest,
  }) as ViewStyle;

  ViewStyle = setSpaceStyle({
    Style: ViewStyle,
    ...rest,
  }) as ViewStyle;

  return (
    <BaseScrollView
      contentContainerStyle={{
        ...ContentStyle,
        ...(contentContainerStyle as any),
      }}
      style={{ ...ViewStyle, ...(style as any) }}
      {...rest}
    >
      {children}
    </BaseScrollView>
  );
};

export default View;
