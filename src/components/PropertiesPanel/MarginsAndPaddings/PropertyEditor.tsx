import React, { useCallback, useRef, useState } from "react";
import { Flex, Input as ChakraInput, Text } from "@chakra-ui/react";
import { useOutsideClick } from "@chakra-ui/react";
import { EditableProp } from "./Editor";
import { useSelectedElement } from "hooks/useSelectedElement";
import { capitalize } from "utils";

export type Position = "top" | "bottom" | "left" | "right";

interface Props {
  position: Position;
  editableProp: EditableProp;
}

const PropertyEditor = ({ position, editableProp }: Props) => {
  const [value, setValue] = useState<null | string>(null);
  const [showInput, setShowInput] = useState(false);

  const { selectedElement, initialStyles } = useSelectedElement();

  const inputRef = useRef<null | HTMLInputElement>(null);

  const property = `${editableProp}${capitalize(position)}` as EditableProp;
  const initialValue = initialStyles[property]?.toString();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    if (!selectedElement) {
      return;
    }
    selectedElement.style[property] = value + "px";
    setValue(value);
  };

  const handleOutsideClick = useCallback(() => {
    setShowInput(false);
  }, []);

  useOutsideClick({
    ref: inputRef,
    handler: handleOutsideClick,
  });

  const getStyleProps = () => {
    switch (position) {
      case "top":
        return {
          top: "0px",
          left: "50%",
          transform: "translate(-50%)",
        };
      case "left":
        return {
          top: "50%",
          left: "0",
          transform: "translate(0, -50%)",
        };
      case "bottom":
        return {
          bottom: "0px",
          left: "50%",
          transform: "translate(-50%)",
        };
      case "right":
        return {
          top: "50%",
          right: "0",
          transform: "translate(0, -50%)",
        };
      default:
        return {};
    }
  };

  return (
    <Flex
      width="3rem"
      height="3rem"
      position="absolute"
      style={getStyleProps()}
      alignItems="center"
      justifyContent="center"
      onClick={() => setShowInput(true)}
      cursor="pointer"
    >
      {showInput ? (
        <ChakraInput
          ref={inputRef}
          padding="0 0.5rem"
          value={value ?? parseInt(initialValue || "")}
          onChange={handleChange}
          color="white"
          autoFocus
          type="number"
        />
      ) : (
        <Text>{value || initialValue}</Text>
      )}
    </Flex>
  );
};

export default PropertyEditor;
