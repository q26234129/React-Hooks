import React, { useContext } from "react";
import { ThemeContext } from "./themes.js";

function ThemedDiv() {
  const themes = useContext(ThemeContext);
  return <div style={themes}>I am styled by theme context!</div>;
}

export default ThemedDiv;
