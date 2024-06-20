import Wrapper from "../UI/Wrapper/wrapper";
import { useEffect } from "react";

import { Navbar } from "../components/navbar";

export const Homepage = () => {
  useEffect(() => {
    fetch("http://localhost:8080/recipes")
      .then((response) => response.json())
      .then((data) => {
        const recipes = data;
        console.log(recipes);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  return (
    <Wrapper>
      <Navbar />
    </Wrapper>
  );
};
