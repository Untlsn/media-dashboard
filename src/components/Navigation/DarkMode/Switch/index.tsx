import React from 'react'
import SwitchProps from "./props";
import { StyledSwitch, SwitchOrb } from './style'
import Background from "./Background";
import Speed from "@Libs/Speed";

const Switch = ({ isOn, background: _background, onClick }: SwitchProps) => {
  const background = _background ?? Background.mono('#aeb3cb')

  return (
    <StyledSwitch
      onClick={(event) => {
        if(onClick) onClick(event, !isOn)
      }}
      background={ isOn ? background.on : background.off }
      scale={ 0.5 } widthToHeight={ 2.2 }
    >
      <SwitchOrb isLeft={ isOn } speed={Speed.fromSec(.5)} />
    </StyledSwitch>
  )
}

export default Switch
export type { default as SwitchProps } from "./props";
export { default as Background } from './Background'
