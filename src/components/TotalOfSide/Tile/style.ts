import styled from "styled-components";
import {ThemedText, Tile} from "@Style/Global";
import { StyledTileProps } from "./props";
import {Logo} from "@Style/components";



export const StyledTile = styled(Tile)<StyledTileProps>`
  max-width: 100%;
  height: 25vh;
  width: 35vh;

  min-height: 150px;
  min-width: 200px;

  @media(max-width: 1000px) {
    height: 10em;
    width: 12em;
    
    font-size: 6vw;
  }
  
  
  margin: 25px 0;
  
  position: relative;
  padding-top: 4px;
  
  border-radius: 5px;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    height: 4px;
    width: 100%;
    background: ${props => props.barColor.get()};
    
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }

  &:hover {
    cursor: pointer;
  }
`
export const Username = styled.div`
  margin-left: 10px;
`
export const ULWrapper = styled.div`
  display: flex;
`
export const FPNWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`
export const Followers = styled.div`
  font-size: 3em;
  font-weight: bolder;
  margin-bottom: -5px;
`
export const PeopleName = styled(ThemedText)`
  text-transform: uppercase;
  letter-spacing: 5px;
  font-size: .7em;
  font-weight: bolder;
`
export const LogoDown = styled(Logo)`
  margin-top: .1em;
  font-size: 1.3em;
`

