import React from "react";
import type { TotalTileProps } from "./props";
import * as S from "./style";
import {Increment, incrementType, Logo} from "@Style/components";
import Bgc from "@Libs/BackgroundCreator";
import numberCutter from "@Libs/numberCutter";


const getBarColor = (bar_color: string[]) => {
  const [color1, color2] = bar_color
  return color2
    ? Bgc.dual(color1, color2)
    : Bgc.mono(color1)
}

const TotalTile = ({ username, followers, increments, icon, bar_color, people_name }: TotalTileProps) => {
  return (
    <S.StyledTile barColor={ getBarColor(bar_color) }>
      <S.ULWrapper><Logo icon={ icon } /><S.Username>{ username }</S.Username></S.ULWrapper>
      <S.FPNWrapper>
        <S.Followers>{ numberCutter(followers) }</S.Followers>
        <S.PeopleName>{ people_name }</S.PeopleName>
      </S.FPNWrapper>
      <Increment type={ incrementType(increments) }>{ Math.abs(increments) }</Increment>
    </S.StyledTile>
  )
}

export default TotalTile
export type { TotalTileProps } from './props'
