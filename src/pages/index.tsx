import React, {useEffect, useState} from 'react';
import {ThemeProvider} from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "@Style/Global";
import { Navigation, TotalOfSide, DayOverview } from "@Components/all";
import {fakeFetch, ApiInterface} from "@Libs/fakeFetch";
import { getFromGraphQL } from '@Libs/Images'

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

  const imgSrc = getFromGraphQL()

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
      <TotalOfSide tileData={fetchData.socials.full.map(data => ({
        ...data,
        icon: imgSrc[data.icon]
      }))}/>
      <DayOverview dayTiles={fetchData.socials.today.map(data => ({
        ...data,
        icon: imgSrc[data.icon]
      }))}/>
    </ThemeProvider>
  );
}

export default Index;
