import React from "react";

export const themes = {
  light: {
    foreground: "#fff",
    background: "#ff6800"
  },
  dark: {
    foreground: "#000",
    background: "#f00"
  }
};

export const ThemeContext = React.createContext(themes.light);
