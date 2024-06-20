import styled from "styled-components";

const Wrapper = styled.div`
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "100vh"};
  background-color: ${(props) => props.bgColor || "white"};
`;

export default Wrapper;
