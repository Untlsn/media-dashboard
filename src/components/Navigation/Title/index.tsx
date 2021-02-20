import React from 'react'
import type TitleProps from "./props";
import * as S from './style'

const numberWithSpaces = (num: number, replacer: string = ' ') => num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, replacer)

const Title = ({ totalFollowers, sideName }: TitleProps) => {
  return (
    <S.Wrapper>
      <S.SideName>{ sideName }</S.SideName>
      <S.Followers>
        Total Followers: { numberWithSpaces(totalFollowers, ',') }
      </S.Followers>
    </S.Wrapper>
  )
}

export default Title
export type { default as TitleProps } from "./props";
