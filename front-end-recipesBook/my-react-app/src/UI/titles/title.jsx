import styled from "styled-components";

const Title = styled.h1`
  color: ${(props) => props.color || "black"};
  font-size: ${(props) => props.fontSize || "50px"};
  text-align: ${(props) => props.textAlign || "center"};
  font-weight: ${(props) => props.fontWeight || "normal"};
  font-family: ${(props) => props.fontFamily || "sans-serif"};
`;

export default Title;
