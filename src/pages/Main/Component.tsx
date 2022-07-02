import { Box, BoxProps } from "@chakra-ui/react";
import { useSelectedElement } from "hooks/useSelectedElement";
import React, { useRef } from "react";

interface Props extends BoxProps {
  children: React.ReactNode;
}
const Component = ({ children, ...rest }: Props) => {
  const element = useRef<HTMLDivElement | null>(null);
  const { setSelectedElement, selectedElement } = useSelectedElement();

  const isSelected = selectedElement && selectedElement === element.current;

  return (
    <Box
      onClick={() => setSelectedElement(element.current)}
      {...rest}
      ref={element}
      border="1px solid white"
      p="2rem"
      cursor="pointer"
      _hover={{ borderColor: "bg.secondary", color: "bg.secondary" }}
      transition="all 0.3s"
      borderColor={isSelected ? "bg.secondary" : undefined}
      color={isSelected ? "bg.secondary" : undefined}
    >
      {children}
    </Box>
  );
};

export default Component;
