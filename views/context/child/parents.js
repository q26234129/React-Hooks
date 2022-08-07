import React from "react";
import { themes, ThemeContext } from "./themes.js";
import Toolbar from "./toolbar";

function Parents() {
  return (
    <ThemeContext.Provider value={themes.light}>
      <Toolbar />
    </ThemeContext.Provider>
  );
}
