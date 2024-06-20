import styled from "styled-components";

const Paragraph = styled.p`
  color: ${(props) => props.color || "black"};
  font-size: ${(props) => props.fontSize || "20px"};
`;

export default Paragraph;
