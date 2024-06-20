import { useEffect, useState } from "react";
import Flex from "../UI/Flex/Flex";
import Title from "../UI/titles/title";
import Image from "../UI/image/Image";
import Paragraph from "../UI/paragraph/paragraph";
import Label from "../UI/Input/label";
import Wrapper from "../UI/Wrapper/wrapper";
import List from "../UI/List/list";
import ListItem from "../UI/List/listItem";
export const RecipeDetails = () => {
  const [data, setData] = useState({});
  const [comments, setComments] = useState();
  const path = window.location.pathname.split("/");
  useEffect(() => {
    // fetch data from id in the path
    fetch(`http://localhost:8080/recipes/${path[2]}`)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });

    // fetch comments of recipe
    fetch(`http://localhost:8080/recipes/${path[2]}/comments`)
      .then((response) => response.json())
      .then((data) => {
        setComments(data);
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  return (
    <>
      <Wrapper width="100%" height="100vh">
        <Flex direction="column" gap="10px" align="center">
          <Title width="100%" aligntext="center">
            {data.name}
          </Title>
          <Image radius="50%" width="30%" src={`/server${data.image}`} />
        </Flex>

        <Flex direction="column" gap="10px" align="left">
          <Label fontSize="50px">Instructions:</Label>
          <Paragraph fontSize="30px">{data.instructions}</Paragraph>
        </Flex>
        <Flex direction="column" gap="10px" align="left">
          <Label fontSize="50px">Ingredients:</Label>
          <List>
            {data.ingredients?.map((ingredient) => (
              <ListItem fontSize="30px" key={ingredient}>
                {ingredient}
              </ListItem>
            ))}
          </List>
          {comments ? (
            <List>
              {comments.map((comment) => (
                <ListItem fontSize="30px" key={comment.id}>
                  {comment.comment}
                </ListItem>
              ))}
            </List>
          ) : (
            <></>
          )}
        </Flex>
      </Wrapper>
    </>
  );
};
