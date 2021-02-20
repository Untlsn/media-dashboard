import React, {useEffect, useState} from 'react';
import {ThemeProvider} from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "@Style/Global";
import Navigation from "@Components/Navigation";
import {fakeFetch, ApiInterface} from "@Libs/fakeFetch";
import TotalOfSide from "@Components/TotalOfSide";

const Index = () => {
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
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    setDarkMode(localStorage.getItem('theme') == 'dark')
    fakeFetch().then(setFetchData)
  })


  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <GlobalStyles />
      <Navigation
        totalFollowers={fetchData.socials.total}
        sideName={fetchData.side_metadata.title}
        isDarkMode={darkMode}
        darkModeController={setDarkMode}/>
      <TotalOfSide tileData={fetchData.socials.full}/>
    </ThemeProvider>
  );
}

export default Index;
