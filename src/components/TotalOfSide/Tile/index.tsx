import React from "react";
import type { TotalTileProps } from "./props";
import * as S from "./style";
import Bgc from "@Libs/BackgroundCreator";

const incrementType = (increments: number) =>
  increments < 0 ? 'down'
    : increments > 0 ? 'up' : 'none'


const getBarColor = (bar_color: string[]) => {
  const [color1, color2] = bar_color
  return color2
    ? Bgc.dual(color1, color2)
    : Bgc.mono(color1)
}

const TotalTile = ({ username, followers, increments, icon, bar_color, people_name }: TotalTileProps) => {
  return (
    <S.StyledTile barColor={ getBarColor(bar_color) }>
      <S.ULWrapper><S.Logo icon={ icon } /><S.Username>{ username }</S.Username></S.ULWrapper>
      <S.FPNWrapper>
        <S.Followers>{ followers }</S.Followers>
        <S.PeopleName>{ people_name }</S.PeopleName>
      </S.FPNWrapper>
      <S.Increment type={ incrementType(increments) }>{ Math.abs(increments) }</S.Increment>
    </S.StyledTile>
  )
}

export default TotalTile
export type { TotalTileProps } from './props'
