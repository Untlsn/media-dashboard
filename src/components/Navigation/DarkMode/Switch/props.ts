import type { MouseEvent } from "react";
import type Background from "./Background";
import Speed from "@Libs/Speed";

export default
interface SwitchProps extends StyledSwitchProps{
  isOn?: boolean,
  onClick?: (event: MouseEvent<HTMLDivElement>, switchState: boolean) => any
}

export interface StyledSwitchProps {
  background?: Background,
  scale?: number
}
export
interface SwitchOrbProps {
  isLeft?: boolean
  speed?: Speed
}
