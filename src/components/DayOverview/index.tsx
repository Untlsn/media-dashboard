import React from "react";
import * as S from "./style";
import {DayOverviewProps} from "./props";
import DayTile from "./DayTile";

const DayOverview = (props: DayOverviewProps) => {
  const dayTiles = [
    props.dayTiles.slice(0, 4),
    props.dayTiles.slice(4, 8)
  ]
  return (
    <S.Wrapper>
      <S.Prompt>Overview - Today</S.Prompt>
      <div>{
        dayTiles.map((dayTile, key) => (
          <S.Row key={ key }>{
            dayTile.map((props, key) =>
              <DayTile key={key} { ...props }/>
            )
          }</S.Row>
        ))
      }</div>
    </S.Wrapper>
  )
}

export default DayOverview
export type { DayOverviewProps } from './props'
