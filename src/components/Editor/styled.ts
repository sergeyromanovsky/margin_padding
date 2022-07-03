import { Text } from "@chakra-ui/react";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { transientOptions } from "utils/transientOptions";

export const StyledText = styled(Text, transientOptions)<{
  $wasChanged: boolean;
  $isValid: boolean;
}>`
  ${({ $isValid, $wasChanged }) => {
    return css`
      border-bottom: ${$wasChanged ? "1px dashed" : ""};
      border-color: ${$isValid ? "yellow" : "red"};
      text-decoration: ${!$isValid ? "line-through" : ""};
    `;
  }}
`;
