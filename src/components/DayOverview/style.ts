import styled from "styled-components";
import {ThemedText} from "@Style/Global";

export const Prompt = styled(ThemedText)`
  margin-top: 15px;
  font-size: 1.5em;
  font-weight: bolder;
`

export const Wrapper = styled.div`
  margin-bottom: 10px;  
`
export const TileWrapper = styled.div`
  display: grid;
  gap: 25px;
  
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: repeat(4, 1fr);

  @media(max-width: 1000px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`
