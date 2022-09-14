import React from "react";

export const themes = {
  light: {
    color: "blue",
    background: "#ff6800"
  },
  dark: {
    color: "white",
    background: "black"
  }
};
// 创建上下文
export const ThemeContext = React.createContext(themes);
