import Title from "../UI/titles/title";
import Flex from "../UI/Flex/Flex";
import Image from "../UI/image/Image";
import Paragraph from "../UI/paragraph/paragraph";
import LinkButton from "../UI/Link/linkButton";
function App() {
  return (
    <>
      <Flex
        width="100%"
        height="100vh"
        direction="row"
        justify="center"
        align="center"
        gap="100px"
      >
        <Flex direction="column" justify="center" align="center" gap="10px">
          <Image
            src="/welcome-image.jpeg"
            width="80%"
            height="80%"
            borderRadius="30px"
          />
        </Flex>
        <Flex direction="column" justify="center" align="center" gap="10px">
          <Image src="/cook.jpg" width="200px" height="200px" />
          <Title>Welcome to RecipesBook</Title>
          <Paragraph fontSize="30px">The place for all your recipes</Paragraph>
          <LinkButton border="2px solid black" to="/Homepage">
            Get started
          </LinkButton>
        </Flex>
      </Flex>
    </>
  );
}

export default App;
