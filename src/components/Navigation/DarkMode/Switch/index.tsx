import React, { useState } from 'react'
import SwitchProps from "./props";
import { StyledSwitch, SwitchOrb } from './style'
import Background from "./Background";
import Speed from "@Libs/Speed";

const Switch = (props: SwitchProps) => {
  const [isOn, setIsOn] = useState(props.isOn ?? false)
  const background = props.background ?? Background.mono('#aeb3cb')
  const additionalClickFn = props.onClick

  return (
    <StyledSwitch
      onClick={(event) => {
        if(additionalClickFn) additionalClickFn(event, !isOn)
        setIsOn(!isOn)
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
