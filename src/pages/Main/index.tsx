import { Flex } from "@chakra-ui/react";
import Component from "./Component";

const Main = () => {
  return (
    <Flex alignItems="center" justifyContent="center" padding="0 10rem">
      <Flex gap="1rem" flexWrap="wrap" alignItems="flex-start">
        <Component ml="auto">Component 1</Component>
        <Component ml="2rem">Component 2</Component>
        <Component ml="3rem">Component 3</Component>
      </Flex>
    </Flex>
  );
};

export default Main;
