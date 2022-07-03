import { Grid, GridItem, GridProps } from "@chakra-ui/react";
import PropertyEditor from "./PropertyEditor";

export type EditableProp = "padding" | "margin";

interface Props extends GridProps {
  editableProp: EditableProp;
  children?: React.ReactNode;
}

const Editor = ({ editableProp, children, ...rest }: Props) => {
  return (
    <Grid
      h="100%"
      gridTemplateColumns="auto 1fr auto"
      gridTemplateRows="auto 1fr auto"
      alignItems="center"
      justifyItems="center"
      {...rest}
    >
      <GridItem />
      <GridItem>
        <PropertyEditor position="top" editableProp={editableProp} />
      </GridItem>
      <GridItem />
      <GridItem>
        <PropertyEditor position="left" editableProp={editableProp} />
      </GridItem>
      <GridItem w="100%" h="100%">{children}</GridItem>
      <GridItem>
        <PropertyEditor position="right" editableProp={editableProp} />
      </GridItem>
      <GridItem></GridItem>
      <GridItem>
        <PropertyEditor position="bottom" editableProp={editableProp} />
      </GridItem>
      <GridItem></GridItem>
    </Grid>
  );
};

export default Editor;
