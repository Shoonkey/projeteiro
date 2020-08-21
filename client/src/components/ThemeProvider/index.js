import React, { createContext, useState, useContext, forwardRef } from 'react';

export const ThemeContext = createContext(null);

export function withTheme(Component){

  const ThemedComponent = forwardRef((props, ref) => {
    const { theme } = useContext(ThemeContext);
    return <Component innerRef={ref} theme={theme} {...props} />
  });

  return ThemedComponent;
  
}

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