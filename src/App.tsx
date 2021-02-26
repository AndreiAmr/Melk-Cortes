import { Container, GlobalStyles } from "./styles/appStyle";
import Home from "./pages/Home";
import Local from "./pages/Local";
import Services from "./pages/Services";
import PicturesOfServices from "./pages/PicturesOfServices";

function App() {
  return (
    <Container>
      <GlobalStyles />
      <Home />
      <Local />
      <Services />
      <PicturesOfServices />
    </Container>
  );
}

export default App;
