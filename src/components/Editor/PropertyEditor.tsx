import React, {
  useCallback,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { Flex, Input as ChakraInput } from "@chakra-ui/react";
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
    const { value } = e.target;

    if (!selectedElement) {
      return;
    }

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

  const getStyleProps = useMemo(() => {
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
  }, [position]);

  const wasChanged = Boolean(value && value !== initialValue);

  return (
    <Flex
      width="30px"
      height="30px"
      position="absolute"
      style={getStyleProps}
      alignItems="center"
      justifyContent="center"
      onClick={() => setShowInput(true)}
      cursor="pointer"
    >
      {showInput ? (
        <ChakraInput
          ref={inputRef}
          padding="0 5px"
          value={value || ""}
          onChange={handleChange}
          color="white"
          autoFocus
          type="string"
        />
      ) : (
        <StyledText $isValid={isValid} $wasChanged={wasChanged}>
          {value}
        </StyledText>
      )}
    </Flex>
  );
};

export default PropertyEditor;
