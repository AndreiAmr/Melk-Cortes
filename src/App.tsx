import { Container, GlobalStyles } from "./styles/appStyle";
import Home from "./pages/Home";
import Local from "./pages/Local";
import Services from "./pages/Services";
import PicturesOfServices from "./pages/PicturesOfServices";
import  AboutMe  from "./pages/AboutMe";

function App() {
  return (
    <Container>
      <GlobalStyles />
      <Home />
      <Local />
      <Services />
      <PicturesOfServices />
      <AboutMe />
    </Container>
  );
}

export default App;
