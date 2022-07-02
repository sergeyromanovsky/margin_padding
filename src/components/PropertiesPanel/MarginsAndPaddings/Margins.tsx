import { Box } from "@chakra-ui/react";
import React from "react";
import Editor from "./Editor";

interface Props {
  children: React.ReactNode;
}
const Margins = ({ children }: Props) => {
  return (
    <Box
      width="100%"
      bg="bg.main"
      height="15rem"
      padding="3rem"
      position="relative"
    >
      <Editor editableProp="margin" />
      {children}
    </Box>
  );
};

export default Margins;
