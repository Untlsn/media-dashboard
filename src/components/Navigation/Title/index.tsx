import React from 'react'
import type TitleProps from "./props";
import { SideName, Followers } from './style'

const numberWithSpaces = (num: number, replacer: string = ' ') => num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, replacer)

const Title = ({ totalFollowers, sideName }: TitleProps) => {
  return (
    <div>
      <SideName>{ sideName }</SideName>
      <Followers>
        Total Followers: { numberWithSpaces(totalFollowers, ',') }
      </Followers>
    </div>
  )
}

export default Title
export type { default as TitleProps } from "./props";
