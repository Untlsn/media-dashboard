import styled from "styled-components";

export
const ThemedText = styled.div`
  color: ${props => props.theme.secTextColor};
`
export
const ThemedBackground = styled.div`
  background: ${props => props.theme.secBackground};
`
export
const Tile = styled.div`
  background: ${props => props.theme.tileColor};
  &:hover {
    background: ${props => props.theme.secBackgroundHover};
  }
  transition: background .5s;
`
