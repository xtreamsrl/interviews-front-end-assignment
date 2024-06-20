import styled from "styled-components";
import { Link } from "react-router-dom";

const LinkButton = styled(Link)`
  width: ${(props) => props.width || "100px"};
  height: ${(props) => props.height || "40px"};
  border-radius: ${(props) => props.borderRadius || "10px"};
  background-color: ${(props) => props.bgColor || "transparent"};
  color: ${(props) => props.color || "black"};
  font-size: ${(props) => props.fontSize || "20px"};
  cursor: pointer;
  text-decoration: none;
  border: ${(props) => props.border || "none"};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default LinkButton;
