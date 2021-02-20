import React from "react";
import * as S from "./style";
import {DayOverviewProps} from "./props";
import DayTile from "./DayTile";

const DayOverview = (props: DayOverviewProps) => {
  const dayTiles = props.dayTiles.slice(0, 8)
  return (
    <S.Wrapper>
      <S.Prompt>Overview - Today</S.Prompt>
      <S.TileWrapper>{
        dayTiles.map((props, key) => <DayTile key={key} { ...props }/>)
      }</S.TileWrapper>
    </S.Wrapper>
  )
}

export default DayOverview
export type { DayOverviewProps } from './props'
