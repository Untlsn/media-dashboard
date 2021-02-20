import styled from "styled-components";
import {ThemedText, Tile} from "@Style/Global";

export const Wrapper = styled(Tile)`
  display: grid;
  padding-left: 30px;
  
  grid-template-columns: 2fr 1fr;
  grid-template-rows: 1fr 1fr;
  
  height: 160px;
  width: 280px;
  align-items: center;
  border-radius: 15px;
  
  &:hover {
    cursor: pointer;
  }
`

export const Name = styled(ThemedText)`
  font-weight: bolder;
`
export const Count = styled.div`
  font-size: 2em;
  font-weight: bold;
`
