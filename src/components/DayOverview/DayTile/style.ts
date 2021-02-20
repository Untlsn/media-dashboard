import styled from "styled-components";
import {ThemedText, Tile} from "@Style/Global";

export const Wrapper = styled(Tile)`
  max-width: 100%;
  height: 20vh;
  width: 35vh;

  min-height: 150px;
  min-width: 200px;

  @media(max-width: 1000px) {
    height: 8em;
    width: 12em;

    font-size: 6vw;
  }
  
  display: grid;
  padding-left: 30px;
  
  grid-template-columns: 2fr 1fr;
  grid-template-rows: 1fr 1fr;
  
  align-items: center;
  border-radius: 7px;
  
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
