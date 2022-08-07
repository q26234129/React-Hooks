import React from "react";

function ThemedButton() {
  const themes = useContext(ThemeContext);
  return <button style={themes}>I am styled by theme context!</button>;
}

export default ThemedButton;
