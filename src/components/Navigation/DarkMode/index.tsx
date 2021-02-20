import React from 'react'
import type DarkModeProps from "./props";
import Switch, {Background} from "./Switch";
import { Wrapper, Text } from './style'
import Bgc from "@Libs/BackgroundCreator";

const DarkMode = (props: DarkModeProps) => {
  const isDarkMode = props.isDarkMode ?? false
  const { darkModeController } = props
  return (
    <Wrapper>
      <Text>{ isDarkMode ? 'Light' : 'Dark' } Mode</Text>
      <Switch
        isOn={ isDarkMode }
        background={Background.dual('#aeb3cb', Bgc.dual('#00aeff', '#00995d').get())}
        onClick={ (_, isOn) => darkModeController(isOn) }
      />
    </Wrapper>
  )
}

export default DarkMode
export type { default as DarkModeProps } from './props'
