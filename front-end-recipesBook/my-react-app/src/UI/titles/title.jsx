import styled from "styled-components";

const Title = styled.h1`
  width: ${(props) => props.width};
  color: ${(props) => props.color || "black"};
  font-size: ${(props) => props.fontSize || "50px"};
  text-align: ${(props) => (props.aligntext ? props.aligntext : "left")};
  font-weight: ${(props) => props.fontWeight || "normal"};
  font-family: ${(props) => props.fontFamily || "sans-serif"};
`;

export default Title;
