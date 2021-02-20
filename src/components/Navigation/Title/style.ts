import styled from "styled-components";
import {ThemedText} from "@Style/Global";

export const SideName = styled.h1`
  margin: 0;
`
export const Followers = styled(ThemedText)`
  font-weight: bolder;
`
export const Wrapper = styled.div`
  @media(max-width: 1000px) {
    margin-top: 1.5em;
    
    position: relative;
    margin-bottom: 2.4em;
    &::after {
      content: '';
      position: absolute;
      bottom: -1.2em;
      height: 3px;
      width: 90vw;
      
      background: ${props => props.theme.secTextColor};
      opacity: .3;
    }
  }
`
