import styled from "styled-components";
import {ThemedBackground} from "@Style/Global";


export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;

  margin-bottom: 3vh;
  margin-top: 1vh;
  
  @media(max-width: 1000px) {
    flex-direction: column;
    font-size: 1.2em;
    margin-bottom: 15vh;
  }
`
export const Shadow = styled(ThemedBackground)`
  position: absolute;
  width: 100vw;
  height: 20vh;
  border-bottom-left-radius: 50px;
  border-bottom-right-radius: 50px;
  
  @media(max-width: 1000px) {
    height: 40vh;
  }
`
