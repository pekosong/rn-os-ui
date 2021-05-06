import React, { useReducer, useContext, useCallback, Dispatch } from "react";

type Theme = {
  primary: string;
  black: string;
  white: string;
  gray1: string;
  gray2: string;
  gray3: string;
  gray4: string;
  gray5: string;
};

type State = {
  theme: Theme;
};

type Action = {
  type: "SET_THEME";
  payload: State;
};

const defaultTheme = {
  primary: "#23b400",
  black: "#000000",
  white: "#ffffff",
  gray1: "#3d3d3d",
  gray2: "#666666",
  gray3: "#808080",
  gray4: "#bfbfbf",
  gray5: "#f6f6f6",
};

const initialState = { theme: defaultTheme };

const store = React.createContext<{
  state: State;
  dispatch: Dispatch<Action>;
}>({ state: initialState, dispatch: () => {} });

const { Provider } = store;

const OsThemeProvider = ({
  theme,
  children,
}: {
  theme?: Theme;
  children: React.ReactNode;
}) => {
  const [state, dispatch] = useReducer(
    (state: State, action: Action) => {
      switch (action.type) {
        case "SET_THEME":
          return action.payload;
        default:
          return state;
      }
    },
    { theme: theme ?? defaultTheme }
  );
  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

const useOsTheme = () => {
  const {
    state: { theme },
    dispatch,
  } = useContext(store);
  const setTheme = useCallback(
    async (payload: State) => {
      dispatch({ type: "SET_THEME", payload });
    },
    [dispatch]
  );
  return {
    theme,
    setTheme,
  };
};

export { OsThemeProvider, useOsTheme };
