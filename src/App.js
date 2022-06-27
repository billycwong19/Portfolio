import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./GlobalStyles/GlobalStyles.style";
import { lightTheme, darkTheme } from './GlobalStyles/Themes.style'
import { animateScroll as scroll } from 'react-scroll'

import Navbar from "./GlobalComponents/Navbar/";
import Footer from "./GlobalComponents/Footer";
// import Projects from './Pages/Projects/'
// import About from './Pages/About/About'
import Home from './Pages'

const themeSetter = () => {
    let currentDate = new Date();
    let currentHour = currentDate.getHours()

    return currentHour > 20 || currentHour < 7 ? 'dark' : 'light';
}

function App() {
    const [themeState, setTheme] = useState(themeSetter())
    const themeSwitcher = () => themeState === 'light' ? setTheme('dark') : setTheme('light');

    const toggleHome = (event) => {
      scroll.scrollToTop();
  }

  return (
    <ThemeProvider theme={ themeState === 'light' ? lightTheme : darkTheme } >
      <GlobalStyles />
      <Navbar props={{ themeSwitcher, themeState, toggleHome }} />
      {/* {renderCurrentPage()} */}
      <Home props={{ themeState }} />
      <Footer props={{ themeState, toggleHome }}/>
    </ThemeProvider>
  );
}

export default App;
