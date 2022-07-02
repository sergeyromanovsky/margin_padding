import { Box, Button } from "@chakra-ui/react";
import React from "react";

interface Props {
  title: string;
  children: React.ReactNode;
}

const Collapsible = ({ title, children }: Props) => {
  const [collapsed, toggle] = React.useState(false);

  return (
    <section>
      <Button
        width="100%"
        bg="bg.main300"
        border="none"
        p="8px"
        color="white"
        fontWeight={400}
        textAlign="left"
        fontSize="16px"
        onClick={(_e) => toggle((_) => !collapsed)}
        justifyContent="left"
        borderRadius="0"
        _hover={{
          bg: "bg.main300",
        }}
      >
        {title}
      </Button>
      {!collapsed && <Box m="8px"> {children} </Box>}
    </section>
  );
};

export default Collapsible;
