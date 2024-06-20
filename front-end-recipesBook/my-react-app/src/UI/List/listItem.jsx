import styled from "styled-components";

const ListItem = styled.li`
  color: ${(props) => props.color || "black"};
  font-size: ${(props) => props.fontSize || "20px"};
`;

export default ListItem;
