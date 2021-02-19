import styled from "styled-components";
import { ThemedText } from "@Style/Global";

export
const Wrapper = styled.div`
  position: relative;
`
export
const Text = styled(ThemedText)`
  font-weight: bold;
  position: absolute;
  left: -70px;
  top: 12px;
  user-select: none;
`
