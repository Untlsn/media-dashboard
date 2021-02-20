import styled from "styled-components";

interface LogoProps {
  icon: string
}
const Logo = styled.div<LogoProps>`
  display: block;
  height: 20px;
  width:  20px;
  background: url("${props => props.icon}") no-repeat center;
  background-size: contain;
`
export default Logo
