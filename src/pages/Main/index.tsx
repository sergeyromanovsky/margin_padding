import { Flex } from "@chakra-ui/react";
import Component from "./Component";

const Main = () => {
  return (
    <Flex alignItems="center" justifyContent="center" padding="0 100px">
      <Flex gap="10px" flexWrap="wrap" alignItems="flex-start">
        <Component ml="auto">Component 1</Component>
        <Component ml="20px">Component 2</Component>
        <Component ml="30px">Component 3</Component>
      </Flex>
    </Flex>
  );
};

export default Main;
