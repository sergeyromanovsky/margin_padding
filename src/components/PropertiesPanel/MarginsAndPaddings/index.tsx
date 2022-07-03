import { Box } from "@chakra-ui/react";
import Editor from "components/Editor";

const MarginsAndPaddings = () => {
  return (
    <Box width="100%" bg="bg.main" h="180px">
      <Editor editableProp="margin">
        <Editor
          editableProp="padding"
          border="2px solid"
          h="100%"
          borderColor="bg.secondary"
        />
      </Editor>
    </Box>
  );
};

export default MarginsAndPaddings;
