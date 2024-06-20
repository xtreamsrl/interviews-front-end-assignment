import styled from "styled-components";

const Flex = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  display: flex;
  flex-direction: ${(props) => props.direction};
  justify-content: ${(props) => props.justify};
  align-items: ${(props) => props.align};
  gap: ${(props) => props.gap || "none"};
  padding: ${(props) => props.padding};
  flex-wrap: ${(props) => props.wrap || "nowrap"};
  border: ${(props) => props.border || "none"};
  border-radius: ${(props) => props.radius || "none"};
  background-color: ${(props) => props.backgroundColor || "none"};
`;

export default Flex;
