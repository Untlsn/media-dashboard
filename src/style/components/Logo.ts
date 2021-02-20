import styled from "styled-components";

interface LogoProps {
  icon: string,
  scale?: number
}
const Logo = styled.div<LogoProps>`
  font-size: ${props => props.scale ?? 1}em;
  
  display: block;
  height: 1em;
  width:  1em;
  background: url("${props => props.icon}") no-repeat center;
  background-size: contain;
`
export default Logo
