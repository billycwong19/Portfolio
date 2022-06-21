import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./GlobalStyles/GlobalStyles.style";
import { lightTheme, darkTheme } from './GlobalStyles/Themes.style'

import Navbar from "./GlobalComponents/Navbar/Navbar";
import Footer from "./GlobalComponents/Footer/Footer";
import Projects from './Pages/Projects/Projects'
import About from './Pages/About/About'

const themeSetter = () => {
    let currentDate = new Date();
    let currentHour = currentDate.getHours()

    return currentHour > 20 ? 'dark' : currentHour < 20 && currentHour > 7 ? 'light' : 'dark';
}


function App() {
    const [theme, setTheme] = useState(themeSetter())
    const [currentPage, setCurrentPage] = useState('Projects')
    const themeSwitcher = () => theme === 'light' ? setTheme('dark') : setTheme('light');
    const renderCurrentPage= () => {
      if (currentPage === 'Projects') {
        return <Projects />
      }
      if (currentPage === 'About') {
        return <About />
      }
    }

  return (
    <ThemeProvider theme={ theme === 'light' ? lightTheme : darkTheme }>
      <GlobalStyles />
      <Navbar props={{ themeSwitcher, setCurrentPage, currentPage, theme }} />
      {renderCurrentPage()}
      <Footer props={{ setCurrentPage, theme }}/>
    </ThemeProvider>
  );
}

export default App;
