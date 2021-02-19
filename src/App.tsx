import React, { useState } from 'react';
import {ThemeProvider} from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "@Style/Global";
import Navigation from "@Components/Navigation";
import {fakeFetch, ApiInterface} from "@Libs/fakeFetch";

const App = () => {

  const [fetchData, setFetchData] = useState<ApiInterface>({
    side_metadata: {
      title: ''
    },
    socials: {
      full: [],
      today: [],
      total: 0
    },
  })



  const [darkMode, setDarkMode] = useState(
    localStorage.getItem('theme') === 'dark'
  )
  window.addEventListener('beforeunload', () => {
    localStorage.setItem('theme', darkMode ? 'dark' : 'light')
  })

  fakeFetch().then(setFetchData)



  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <GlobalStyles />
      <Navigation
        totalFollowers={fetchData.socials.total}
        sideName={fetchData.side_metadata.title}
        isDarkMode={darkMode}
        darkModeController={setDarkMode}/>
    </ThemeProvider>
  );
}

export default App;
