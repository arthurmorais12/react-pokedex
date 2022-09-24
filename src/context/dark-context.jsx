import React, { useState } from "react";

const DarkContext = React.createContext({
  isDark: true,
  onChangeTheme: () => {}
});

export const DarkProvider = (props) => {
    const [isDark, setIsDark] = useState(true);

    const onChangeTheme = () => {
        setIsDark((prevTheme) => !prevTheme)
    }

  return (
    <DarkContext.Provider value={{ isDark, onChangeTheme }}>
      {props.children}
    </DarkContext.Provider>
  );
};

export default DarkContext;
