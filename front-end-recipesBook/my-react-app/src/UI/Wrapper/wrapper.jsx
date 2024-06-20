import styled from "styled-components";

const Wrapper = styled.div`
  height: ${(props) => props.height || "100vh"};
  background-color: ${(props) => props.bgColor || "white"};
  padding: ${(props) => props.padding || "20px"};
`;

export default Wrapper;
