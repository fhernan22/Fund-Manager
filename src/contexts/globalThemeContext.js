import React, { createContext, useReducer } from "react";

export const globalThemeContext = createContext();
export const globalThemeDispatchContext = createContext();

const themeReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_THEME": {
      return {
        ...state,
        currentTheme: action.currentTheme,
      };
    }

    case "TOGGLE_SIDEBAR_THEME": {
      return {
        ...state,
        sidebarTheme: action.sidebarTheme,
      };
    }
    case "TOGGLE_SIDEBAR_MINI": {
      return {
        ...state,
        sidebarMini: action.sidebarMini,
      };
    }

    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
};

export const ThemeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(themeReducer, {
    currentTheme: "darkMode",

    sidebarTheme: "blue",

    sidebarMini: window.innerWidth < 993 ? false : true,
  });

  return (
    <globalThemeDispatchContext.Provider value={dispatch}>
      <globalThemeContext.Provider value={state}>
        {children}
      </globalThemeContext.Provider>
    </globalThemeDispatchContext.Provider>
  );
};
