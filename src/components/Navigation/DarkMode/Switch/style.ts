import styled from "styled-components";
import type {StyledSwitchProps, SwitchOrbProps} from "./props";

export
const StyledSwitch = styled.div<StyledSwitchProps>`
  
  background: ${props => props.background ?? '#aeb3cb'};
  font-size: ${props => props.scale}em;
  
  border-radius: 1em;
  height: 1em;
  width: 2em;

  position: relative;
  
  &:hover {
    cursor: pointer;
  }
`

export
const SwitchOrb = styled.div<SwitchOrbProps>`
  background: #fff;
  transform: translateX(${ 
    props => props.isLeft ? `-.9em` : 0
  });
  
  transition: transform ${props => props.speed?.toString() ?? '1s'};
  
  border-radius: 100%;
  height: .9em;
  width: .9em;

  position: absolute;
  right: .1em;
  
  top: 0;
  bottom: 0;
  margin: auto;
`
