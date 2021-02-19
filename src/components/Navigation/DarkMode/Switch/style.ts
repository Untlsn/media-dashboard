import styled from "styled-components";
import type {SwitchOrbProps, SwitchStyleProps} from "./props";

const switchHeight = 50

export
const StyledSwitch = styled.div<SwitchStyleProps>`
  font-size: ${props => (props.widthToHeight ?? 3) * 50}px;
  
  background: ${props => props.background ?? '#aeb3cb'};
  transform: scale(${props => props.scale ?? 1});
  
  border-radius: ${switchHeight}px;
  height: ${switchHeight}px;
  width: 1em;

  position: relative;
`

const orbSize = 45
const gap = 10

export
const SwitchOrb = styled.div<SwitchOrbProps>`
  background: ${props => props.background ?? '#fff'};
  transform: translateX(${ 
    props => props.isLeft ? `calc(-1em + ${gap*2 + orbSize}px)` : 0
  });
  
  
  
  transition: transform ${props => props.speed?.toString() ?? '1s'};
  
  border-radius: 100%;
  height: ${orbSize}px;
  width: ${orbSize}px;

  position: absolute;
  right: ${gap}px;
  
  top: 0;
  bottom: 0;
  margin: auto;
`
