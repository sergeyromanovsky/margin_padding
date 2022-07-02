import { Box } from "@chakra-ui/react";
import Margins from "./Margins";
import Paddings from "./Paddings";

const MarginsAndPaddings = () => {
  return (
    <Margins>
      <Box border="2px solid white" h="100%">
        <Paddings />
      </Box>
    </Margins>
  );
};

export default MarginsAndPaddings;
