import React from 'react'
import DarkMode from "./DarkMode";
import Title from "./Title";
import type NavigationProps from "./props";
import { Wrapper, Shadow } from './style'

const Navigation = ({ totalFollowers, sideName, isDarkMode, darkModeController }: NavigationProps) => {
  return (
    <>
      <Wrapper>
        <Title totalFollowers={totalFollowers} sideName={sideName}/>
        <DarkMode isDarkMode={isDarkMode} darkModeController={darkModeController}/>
      </Wrapper>
      <Shadow />
    </>
  )
}

export default Navigation
export type { default as NavigationProps } from "./props";
