import { Grid } from "@chakra-ui/react";
import PropertiesPanel from 'components/PropertiesPanel';
import Main from "./Main";

function App() {
  return (
    <Grid bg="bg.main" color="white"  minH="100vh" gridTemplateColumns="auto 1fr">
      <PropertiesPanel />
      <Main />
    </Grid>
  );
}

export default App;
