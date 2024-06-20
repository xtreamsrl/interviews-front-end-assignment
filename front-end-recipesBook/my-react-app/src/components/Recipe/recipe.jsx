/* eslint-disable react/prop-types */
import { Link, useNavigate } from "react-router-dom";
import Button from "../../UI/Button/button";
import Flex from "../../UI/Flex/Flex";
import LinkButton from "../../UI/Link/linkButton";
import List from "../../UI/List/list";
import ListItem from "../../UI/List/listItem";
import Image from "../../UI/image/Image";
import Paragraph from "../../UI/paragraph/paragraph";
import Title from "../../UI/titles/title";

export const RecipeItem = ({ recipe }) => {
  return (
    <>
      <Flex width="900px" border="1px solid black" direction="row">
        <Flex>
          <Image width="400px" height="400px" src={`/server${recipe.image}`} />
        </Flex>
        <Flex direction="column" gap="10px" padding="10px">
          <Title fontSize="20px">{recipe.name}</Title>
          <Paragraph>{recipe.instructions}</Paragraph>
          <List direction="column" gap="10px">
            {recipe.ingredients.map((ingredient) => (
              <ListItem key={ingredient}>{ingredient}</ListItem>
            ))}
          </List>
          <Link
            to={`/recipe/${recipe.id}`}
            state={{ data: recipe }}
            key={recipe.id}
          >
            View Recipe
          </Link>
        </Flex>
      </Flex>
    </>
  );
};
