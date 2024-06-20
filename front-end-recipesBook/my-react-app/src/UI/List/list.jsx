import styled from "styled-components";

const List = styled.ul`
  list-style: ${(props) => props.listStyle || "check"};
  display: flex;
  flex-direction: ${(props) => props.direction || "column"};
  gap: ${(props) => props.gap || "10px"};
`;

export default List;
