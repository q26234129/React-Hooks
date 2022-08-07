import React from "react";
import { themes, ThemeContext } from "./child/themes.js";
import Toolbar from "./child/toolbar.js";

function Parents() {
  return (
    <ThemeContext.Provider value={themes.light}>
      <Toolbar />
    </ThemeContext.Provider>
  );
}

export default Parents;
