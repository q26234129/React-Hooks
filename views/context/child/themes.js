import React from "react";

export const themes = {
  light: {
    foreground: "#fff",
    background: "#ff6800"
  },
  dark: {
    foreground: "#f00",
    background: "#000"
  }
};

export const ThemeContext = React.createContext(themes.light);
