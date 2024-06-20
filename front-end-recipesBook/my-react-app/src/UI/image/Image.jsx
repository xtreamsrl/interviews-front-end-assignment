import styled from "styled-components";

const Image = styled.img`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border-radius: ${(props) => props.radius || "none"};
  src: ${(props) => props.src};
`;

export default Image;
