import React from "react";
import { Wrapper } from './style'
import TotalTile from './Tile'
import {TotalOfSideProps} from "@Components/TotalOfSide/props";

const TotalOfSide = ({ tileData }: TotalOfSideProps) => {
  return (
    <Wrapper>
      { tileData.map((props, key) => (
        <TotalTile key={key} { ...props } />
      )) }
    </Wrapper>
  )
}

export default TotalOfSide
export type { TotalOfSideProps } from './props'
