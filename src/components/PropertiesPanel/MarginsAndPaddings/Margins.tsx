import { Box } from "@chakra-ui/react";
import Editor from 'components/Editor';
import React from "react";

interface Props {
  children: React.ReactNode;
}
const Margins = ({ children }: Props) => {
  return (
    <Box
      width="100%"
      bg="bg.main"
      height="150px"
      padding="30px"
      position="relative"
    >
      <Editor editableProp="margin" />
      {children}
    </Box>
  );
};

export default Margins;
