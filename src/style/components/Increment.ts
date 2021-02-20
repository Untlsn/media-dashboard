import styled from "styled-components";
import {ThemedProps} from "../theme";

interface IncrementProps extends ThemedProps{
  type: 'down'|'up'|'none'
}

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

const Increment = styled.div<IncrementProps>`
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

export default Increment
export const incrementType = (increments: number) =>
  increments < 0 ? 'down'
    : increments > 0 ? 'up' : 'none'
