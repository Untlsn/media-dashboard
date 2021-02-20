import React, {useEffect, useState} from 'react';
import styled, {ThemeProvider} from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "@Style/Global";
import { Navigation, TotalOfSide, DayOverview } from "@Components/all";
import {fakeFetch, ApiInterface} from "@Libs/fakeFetch";
import { getFromGraphQL } from '@Libs/Images'

const Wrapper = styled.div`
  margin: 0 50px;
  @media(max-width: 1000px) {
    margin: 0 2vw;
  }
`

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
  const [dataGet, setDataGet] = useState(false)
  const [darkMode, setDarkMode] = useState(false)

  const imgSrc = getFromGraphQL()

  useEffect(() => {
    setDarkMode(localStorage.getItem('theme') == 'dark')
    fakeFetch().then(setFetchData).then(() => setDataGet(true))
  })

  return dataGet
    ? (
      <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
        <Wrapper>
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
        </Wrapper>
      </ThemeProvider>
    )
    : <h1 style={{ textAlign: 'center' }}>Just wait data will come...</h1>
}

export default Index;
