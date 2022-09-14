import React from "react";
import { themes, ThemeContext } from "./child/themeContext.js";
import Child from "./child/child.js";

const { Provider } = ThemeContext;
function Parents() {
  return (
    <Provider value={themes.light}>
      <Child />
    </Provider>
  );
}

export default Parents;
