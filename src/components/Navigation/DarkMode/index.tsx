import React from 'react'
import type DarkModeProps from "./props";
import Switch, {Background, simpleGradientCreator as sgc} from "./Switch";
import { Wrapper, Text } from './style'

const DarkMode = (props: DarkModeProps) => {
  const isDarkMode = props.isDarkMode ?? false
  const { darkModeController } = props
  return (
    <Wrapper>
      <Text>{ isDarkMode ? 'Light' : 'Dark' } Mode</Text>
      <Switch
        isOn={ isDarkMode }
        background={Background.dual('#aeb3cb', sgc('#00aeff', '#00995d'))}
        onClick={ (_, isOn) => darkModeController(isOn) }
      />
    </Wrapper>
  )
}

export default DarkMode
export type { default as DarkModeProps } from './props'
