import React from "react";
import {
  TouchableOpacity as BaseTouchableOpacity,
  TouchableOpacityProps,
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
  setBorderStyle,
  setSpaceStyle,
} from "../utils/style";
import { useOsTheme } from "../contexts/useRnUi";

interface Props extends TouchableOpacityProps, ViewStyle, ExtendStyle {
  children?: JSX.Element;
}

const TouchableOpacity = React.forwardRef<BaseTouchableOpacity, Props>(
  (props, ref) => {
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
      ...rest
    } = props;

    const { theme } = useOsTheme();
    let Style: StyleProp<ViewStyle> = {};

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
      <BaseTouchableOpacity
        ref={ref}
        style={{ ...Style, ...(style as any) }}
        {...rest}
      >
        {children}
      </BaseTouchableOpacity>
    );
  }
);

export default React.memo(TouchableOpacity);
