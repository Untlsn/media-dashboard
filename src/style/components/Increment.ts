import styled from "styled-components";
import {ThemedProps} from "../theme";

interface IncrementProps extends ThemedProps{
  type: 'down'|'up'|'none'
}

class IncrementSup {
  static arrowPicker = (props: IncrementProps) => {
    switch (props.type) {
      case "down": return 'border-top: .3em solid #ca5060;'
      case "up": return 'border-bottom: .3em solid #54b99f;'
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
    border-left: .3em solid transparent;
    border-right: .3em solid transparent;
    
    ${props => IncrementSup.arrowPicker(props)}
    
    position: absolute;
    top: .6em;
    left: -.7em;
  }
`

export default Increment
export const incrementType = (increments: number) =>
  increments < 0 ? 'down'
    : increments > 0 ? 'up' : 'none'
