import type { MouseEvent } from "react";
import type Backgrounds from "./Background";
import Speed from "@Libs/Speed";

export default
interface SwitchProps {
  isOn?: boolean,
  background?: Backgrounds
  onClick?: (event: MouseEvent<HTMLDivElement>, switchState: boolean) => any
}

interface SwitchStylesProps {
  background?: string,
  widthToHeight?: number
}

export
interface SwitchStyleProps extends SwitchStylesProps {
  scale?: number,
}

export
interface SwitchOrbProps extends SwitchStylesProps {
  isLeft?: boolean
  speed?: Speed
}
