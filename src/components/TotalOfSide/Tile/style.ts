import styled from "styled-components";
import {ThemedText, Tile} from "@Style/Global";
import {IncrementProps, LogoProps, StyledTileProps} from "./props";



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
export const Username = styled.div`
  margin-left: 10px;
`
export const Logo = styled.div<LogoProps>`
  display: block;
  height: 20px;
  width:  20px;
  background: url("${props => props.icon}") no-repeat center;
  background-size: contain;
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
export const Increment = styled.div<IncrementProps>`
  position: relative;
  color: ${props => IncrementSup.colorPicker(props)};
  font-weight: bolder;
  &::before {
    content: '';
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    
    ${props => IncrementSup.arrowPicker(props)}
    
    position: absolute;
    top: 10px;
    left: -15px;
  }
`

class IncrementSup {
  static arrowPicker = (props: IncrementProps) => {
    switch (props.type) {
      case "down": return 'border-top: 5px solid #ca5060;'
      case "up": return 'border-bottom: 5px solid #54b99f;'
      case "none": return ''
    }
  }
  static colorPicker = (props: IncrementProps) => {
    switch (props.type) {
      case "down": return '#ca5060;'
      case "up": return '#54b99f;'
      case "none": return props.theme.textColor
    }
  }
}


