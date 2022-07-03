import PropertyEditor from "./PropertyEditor";

export type EditableProp = "padding" | "margin";

interface Props {
  editableProp: EditableProp;
}

const Editor = ({ editableProp }: Props) => {
  return (
    <>
      <PropertyEditor position="top" editableProp={editableProp} />
      <PropertyEditor position="right" editableProp={editableProp} />
      <PropertyEditor position="left" editableProp={editableProp} />
      <PropertyEditor position="bottom" editableProp={editableProp} />
    </>
  );
};

export default Editor;
