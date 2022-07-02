import { CSSObject } from "@chakra-ui/react";
import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";

type SetSelectedElement = (element: HTMLElement | null) => void;

interface Context {
  selectedElement: HTMLElement | null;
  setSelectedElement: SetSelectedElement;
  initialStyles: CSSObject;
}

const SelectedElementContext = createContext<Context>({
  selectedElement: null,
  setSelectedElement: (element: HTMLElement | null) => {},
  initialStyles: {},
});

interface Props {
  children: React.ReactNode;
}
export const SelectedElementProvider = ({ children }: Props) => {
  const [selectedElement, setSelectedElement] = useState<null | HTMLElement>(
    null
  );
  const [initialStyles, setInitialStyles] = useState<CSSObject>({});

  const handleSelectElement: SetSelectedElement = useCallback((element) => {
    if (element) {
      const styles = getComputedStyle(element);
      setInitialStyles({ ...styles });
    }

    setSelectedElement(element);
  }, []);

  const memoizedValue = useMemo(() => {
    return {
      selectedElement,
      setSelectedElement: handleSelectElement,
      initialStyles,
    };
  }, [handleSelectElement, selectedElement, initialStyles]);

  return (
    <SelectedElementContext.Provider value={memoizedValue}>
      {children}
    </SelectedElementContext.Provider>
  );
};

export const useSelectedElement = () => {
  const context = useContext(SelectedElementContext);

  if (context === undefined) {
    throw new Error(
      "useSelectedElement must be used within SelectedElementContext.Provider"
    );
  }
  return context;
};
