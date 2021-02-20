import React from "react";
import {DayTileProps} from "@Components/DayOverview/DayTile/props";
import * as S from './style'
import { Increment, incrementType, Logo } from "@Style/components";
import numberCutter from "@Libs/numberCutter";

const DayTile = ({ name, count, icon, percent_increments }: DayTileProps) => {
  return (
    <S.Wrapper>
      <S.Name>{ name }</S.Name>
      <Logo icon={icon}/>
      <S.Count>{ numberCutter(count) }</S.Count>
      <Increment type={incrementType(percent_increments)}>{ Math.abs(percent_increments) }%</Increment>
    </S.Wrapper>
  )
}


export default DayTile
export type { DayTileProps } from './props'
