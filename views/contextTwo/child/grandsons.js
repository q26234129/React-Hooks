import React, { useContext } from "react";
import { ThemeContext } from "./themeContext";

function Grandsons() {
  const themes = useContext(ThemeContext);
  return <div style={themes}>I am styled by theme context!</div>;
}

export default Grandsons;
