import { Box } from "@chakra-ui/react";
import Collapsible from "components/Collapsible";
import MarginsAndPaddings from "./MarginsAndPaddings";


const PropertiesPanel = () => {
  return (
    <Box
      as="aside"
      w="320px"
      bg="bg.secondary"
      minH="100vh"
    >
      <Collapsible title="Layout">
        <span>example </span>
      </Collapsible>
      <Collapsible title="Margins & Padding">
        <MarginsAndPaddings />
      </Collapsible>
      <Collapsible title="Size">
        <span>example </span>
      </Collapsible>
    </Box>
  );
};

export default PropertiesPanel;
