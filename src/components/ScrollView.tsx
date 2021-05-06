import React from "react";
import {
  ScrollView as BaseScrollView,
  ScrollViewProps,
  ViewStyle,
  StyleProp,
} from "react-native";
import { ExtendStyle } from "../types/style";
import {
  setBgStyle,
  setPositionStyle,
  setFlexStyle,
  setSizeStyle,
  setShadowStyle,
  setSpaceStyle,
  setBorderStyle,
} from "../utils/style";
import { useOsTheme } from "../contexts/useRnUi";

interface Props extends ScrollViewProps, ViewStyle, ExtendStyle {
  children?: React.ReactNode;
}

const ScrollView = React.forwardRef<BaseScrollView, Props>((props, ref) => {
  const {
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
  } = props;

  const { theme } = useOsTheme();

  let Style: StyleProp<ViewStyle> = {};
  const ContentStyle: StyleProp<ViewStyle> = {};

  // view Style
  if (d) Style["display"] = d;
  if (display) Style["display"] = display;
  if (opacity) Style["opacity"] = opacity;
  if (zIndex) Style["zIndex"] = zIndex;
  if (overflow) Style["overflow"] = overflow;

  Style = setBgStyle({ Style, theme, ...rest }) as ViewStyle;
  Style = setPositionStyle({ Style, ...rest }) as ViewStyle;
  Style = setFlexStyle({ Style, ...rest }) as ViewStyle;
  Style = setSizeStyle({ Style, ...rest }) as ViewStyle;
  Style = setShadowStyle({ Style, ...rest }) as ViewStyle;
  Style = setBorderStyle({ Style, theme, ...rest }) as ViewStyle;
  Style = setSpaceStyle({ Style, ...rest }) as ViewStyle;

  return (
    <BaseScrollView
      ref={ref}
      contentContainerStyle={{
        ...ContentStyle,
        ...(contentContainerStyle as any),
      }}
      style={{ ...Style, ...(style as any) }}
      {...rest}
    >
      {children}
    </BaseScrollView>
  );
});

export default React.memo(ScrollView);
