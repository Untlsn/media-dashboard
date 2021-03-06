import React from 'react'
import type DarkModeProps from "./props";
import Switch, {Background} from "./Switch";
import * as S from './style'
import Bgc from "@Libs/BackgroundCreator";

const DarkMode = (props: DarkModeProps) => {
  const isDarkMode = props.isDarkMode ?? false
  const { darkModeController } = props
  return (
    <S.Wrapper>
      <S.Text>{ isDarkMode ? 'Dark' : 'Light' } Mode</S.Text>
      <S.SwitchWrapper>
        <Switch
          isOn={ isDarkMode }
          background={Background.dual('#aeb3cb', Bgc.dual('#00aeff', '#00995d').get())}
          onClick={ (_, isOn) => {
            darkModeController(isOn)
            localStorage.setItem('theme', isOn ? 'dark' : 'light')
          } }
          scale={ 2 }
        />
      </S.SwitchWrapper>
    </S.Wrapper>
  )
}

export default DarkMode
export type { default as DarkModeProps } from './props'
