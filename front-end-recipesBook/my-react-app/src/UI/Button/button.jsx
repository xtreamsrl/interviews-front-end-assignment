import styled from "styled-components";

const Button = styled.button`
  width: ${(props) => props.width || "100px"};
  height: ${(props) => props.height || "40px"};
  border-radius: ${(props) => props.borderRadius || "10px"};
  background-color: ${(props) => props.bgColor || "transparent"};
  color: ${(props) => props.color || "black"};
  font-size: ${(props) => props.fontSize || "20px"};
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  border: ${(props) => props.border || "none"};
  padding: ${(props) => props.padding || "0"};
`;

export default Button;
