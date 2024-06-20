import styled from "styled-components";

const Label = styled.label`
  color: ${(props) => props.color || "black"};
  font-size: ${(props) => props.fontSize || "15px"};
`;

export default Label;
