import styled from "styled-components";

const Paragraph = styled.p`
  color: ${(props) => props.color || "black"};
  font-size: ${(props) => props.fontSize || "20px"};
  margin: ${(props) => props.margin || "5px"};
`;

export default Paragraph;
