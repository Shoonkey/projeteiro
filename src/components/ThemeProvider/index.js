import React, { createContext, useState } from 'react';

export const ThemeContext = createContext(null);

function ThemeProvider({ children }){

  const [themeName, setThemeName] = useState("dark"); 

  let theme = null;
  try {
    theme = require(`./themes/${themeName}.json`);
  } catch(e) {
    console.error(`There doesn't seem to be a '${theme}' theme`);
  }

  return (
    <ThemeContext.Provider 
      value={{ theme, themeName, setTheme: setThemeName }}
    >
      {children}
    </ThemeContext.Provider>
  );

};

export default ThemeProvider;