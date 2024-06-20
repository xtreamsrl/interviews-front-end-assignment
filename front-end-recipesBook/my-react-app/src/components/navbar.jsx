import LinkButton from "../UI/Link/linkButton";
import Flex from "../UI/Flex/Flex";

export const Navbar = () => {
  return (
    <>
      <Flex justify="left" gap="10px">
        <LinkButton to="/">Welcome</LinkButton>
        <LinkButton to="/Homepage">Homepage</LinkButton>
        <LinkButton to="/about">About</LinkButton>
      </Flex>
    </>
  );
};
