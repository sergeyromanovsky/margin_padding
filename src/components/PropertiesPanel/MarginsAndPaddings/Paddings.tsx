import { Box } from "@chakra-ui/react";
import Editor from "./Editor";

const MARGIN = 5;

const Paddings = () => {
  return (
    <Box
      margin={MARGIN + "px"}
      position="relative"
      h={`calc(100% - ${MARGIN * 2}px)`}
    >
      <Editor editableProp="padding" />
    </Box>
  );
};

export default Paddings;
