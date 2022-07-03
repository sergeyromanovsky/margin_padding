import React, { useCallback, useLayoutEffect, useRef, useState } from "react";
import { Box, Input as ChakraInput } from "@chakra-ui/react";
import { useOutsideClick } from "@chakra-ui/react";
import { EditableProp } from ".";
import { useSelectedElement } from "hooks/useSelectedElement";
import { capitalize } from "utils";
import { validateCSS } from "utils/validation";
import { StyledText } from "./styled";

export type Position = "top" | "bottom" | "left" | "right";

interface Props {
  position: Position;
  editableProp: EditableProp;
}

const PropertyEditor = ({ position, editableProp }: Props) => {
  const [value, setValue] = useState<string | null>(null);
  const [showInput, setShowInput] = useState(false);
  const [isValid, setIsValid] = useState(true);

  const { selectedElement, initialStyles } = useSelectedElement();

  const inputRef = useRef<null | HTMLInputElement>(null);

  const property = `${editableProp}${capitalize(position)}` as EditableProp;
  const initialValue = initialStyles[property]?.toString();

  useLayoutEffect(() => {
    if (initialValue) {
      setValue(initialValue);
    }
  }, [initialValue, selectedElement]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!selectedElement) {
      return;
    }
    const { value } = e.target;

    selectedElement.style[property] = value;
    setValue(value);
  };

  const handleOutsideClick = useCallback(() => {
    const cssProperty = `${editableProp}-${position}`;

    if (value) {
      const isValid = validateCSS(cssProperty, value);
      setIsValid(isValid);
    }

    setShowInput(false);
  }, [editableProp, position, value]);

  useOutsideClick({
    ref: inputRef,
    handler: handleOutsideClick,
  });

  const wasChanged = Boolean(value && value !== initialValue);

  return (
    <Box onClick={() => setShowInput(true)} cursor="pointer" p="5px">
      {showInput ? (
        <ChakraInput
          ref={inputRef}
          maxW="40px"
          padding="0 5px"
          value={value || ""}
          onChange={handleChange}
          color="white"
          autoFocus
          type="string"
        />
      ) : (
        <StyledText $isValid={isValid} $wasChanged={wasChanged} lineHeight="25px">
          {value}
        </StyledText>
      )}
    </Box>
  );
};

export default PropertyEditor;
