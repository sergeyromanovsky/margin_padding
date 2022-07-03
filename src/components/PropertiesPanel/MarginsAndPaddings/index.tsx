import { Box } from "@chakra-ui/react";
import Margins from "./Margins";
import Paddings from "./Paddings";

const MarginsAndPaddings = () => {
  return (
    <Margins>
      <Box border="2px solid" h="100%" borderColor="bg.secondary">
        <Paddings />
      </Box>
    </Margins>
  );
};

export default MarginsAndPaddings;
