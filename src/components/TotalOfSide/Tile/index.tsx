import React from "react";
import type { TotalTileProps } from "./props";
import {Followers, Increment, PeopleName, StyledTile, Username} from "./style";
import Bgc from "@Libs/BackgroundCreator";

const getBarColor = (bar_color: string[]) => {
  const [color1, color2] = bar_color
  return color2
    ? Bgc.dual(color1, color2)
    : Bgc.mono(color1)
}

const TotalTile = ({ username, followers, increments, icon, bar_color, people_name }: TotalTileProps) => {

  return (
    <StyledTile barColor={ getBarColor(bar_color) }>
      <Username icon={ `./icon/${icon}` }>{ username }</Username>
      <Followers>{ followers }</Followers>
      <PeopleName>{ people_name }</PeopleName>
      <Increment>{ increments }</Increment>
    </StyledTile>
  )
}

export default TotalTile
export type { TotalTileProps } from './props'
