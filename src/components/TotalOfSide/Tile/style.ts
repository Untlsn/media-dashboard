import styled from "styled-components";
import { Tile } from "@Style/Global";
import BackgroundCreator from "@Libs/BackgroundCreator";


interface StyledTileProps {
  barColor: BackgroundCreator
}
export const StyledTile = styled(Tile)<StyledTileProps>`
  height: 200px;
  width: 250px;
  
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
`
interface UsernameProps {
  icon: string
}
export const Username = styled.div<UsernameProps>`

  &::before {
    content: '';
    background-image: url("${props => props.icon}");
  }
`
export const Followers = styled.div``
export const PeopleName = styled.div``
export const Increment = styled.div``
