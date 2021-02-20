import styled from "styled-components";
import { ThemedText } from "@Style/Global";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  font-size: .7em;
`
export const Text = styled(ThemedText)`
  font-weight: bold;
  user-select: none;
  margin-right: .5em;
`

export const SwitchWrapper = styled.div`
  @media(max-width: 1000px) {
    position: absolute;
    right: 5vw;
  }
`
