import { useEffect, useState } from "react";
import Flex from "../UI/Flex/Flex";
import Title from "../UI/titles/title";
import Image from "../UI/image/Image";
import Paragraph from "../UI/paragraph/paragraph";
import Label from "../UI/Input/label";
import Wrapper from "../UI/Wrapper/wrapper";
import List from "../UI/List/list";
import ListItem from "../UI/List/listItem";
import { Review } from "../components/Reviews/review";
import { GoBackButton } from "../components/GoBackButton/goBackButton";
import Input from "../UI/Input/input";
import Button from "../UI/Button/button";
import "../index.css";
export const RecipeDetails = () => {
  const [data, setData] = useState({});
  const [comments, setComments] = useState();
  console.log(comments);
  const currentDate = new Date();
  const utcDate = currentDate.toISOString().split("T")[0] + "T00:00:00.000Z";
  const [newComment, setNewComment] = useState({
    comment: "",
    rating: 0,
    date: utcDate,
  });
  const [hover, setHover] = useState(null);
  const [totalStars, setTotalStars] = useState(5);
  const path = window.location.pathname.split("/");
  console.log(newComment);
  useEffect(() => {
    // fetch data from id in the path
    fetch(`http://localhost:8080/recipes/${path[2]}`)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.error(error);
      });

    // fetch comments of recipe
    fetch(`http://localhost:8080/recipes/${path[2]}/comments`)
      .then((response) => response.json())
      .then((data) => {
        setComments(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const onCreatingReview = async () => {
    console.log(newComment);
    const response = await fetch(
      `http://localhost:8080/recipes/${path[2]}/comments`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newComment),
      }
    );
    const data = await response.json();
    console.log(data);
    setNewComment({
      comment: "",
      rating: 0,
      date: utcDate,
    });
  };

  return (
    <>
      <Wrapper width="100%" height="100vh">
        <GoBackButton />
        <Flex direction="column" gap="10px" align="center">
          <Title width="100%" aligntext="center">
            {data.name}
          </Title>
          <Image
            radius="50%"
            width="500px"
            height="500px"
            src={`/server${data.image}`}
          />
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
            <Flex direction="column" gap="10px">
              <Title>Comments:</Title>
              <List listStyle="none">
                {comments.map((comment) => (
                  <ListItem fontSize="30px" key={comment.id}>
                    <Review review={comment} />
                  </ListItem>
                ))}
              </List>
            </Flex>
          ) : (
            <></>
          )}
          <Flex width="100%">
            <form onSubmit={(e) => e.preventDefault()}>
              {[...Array(totalStars)].map((star, index) => {
                const currentRating = index + 1;

                return (
                  <label key={index}>
                    <input
                      key={star}
                      type="radio"
                      name="rating"
                      value={currentRating}
                      onChange={() =>
                        setNewComment((prev) => ({
                          ...prev,
                          rating: currentRating,
                        }))
                      }
                    />
                    <span
                      className="star"
                      style={{
                        color:
                          currentRating <= (hover || newComment.rating)
                            ? "#ffc107"
                            : "#e4e5e9",
                      }}
                      onMouseEnter={() => setHover(currentRating)}
                      onMouseLeave={() => setHover(null)}
                    >
                      &#9733;
                    </span>
                  </label>
                );
              })}
              <Input
                type="text"
                placeholder="Add a comment"
                value={newComment.comment}
                name="comment"
                onChange={(e) =>
                  setNewComment((prev) => ({
                    ...prev,
                    comment: e.target.value,
                  }))
                }
              />
              <Button onClick={() => onCreatingReview()}>Add</Button>
            </form>
          </Flex>
        </Flex>
      </Wrapper>
    </>
  );
};
