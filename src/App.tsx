import { Container, GlobalStyles } from "./styles/appStyle";
import Home from "./pages/Home";
import Local from "./pages/Local";
import Services from "./pages/Services";
import PicturesOfServices from "./pages/PicturesOfServices";
import AboutMe from "./pages/AboutMe";
import Loader from "./components/Loader";
import { Provider } from "./contexts/loadingContext";
import Header from "./components/Header";

function App() {
  return (
    <Container>
      <GlobalStyles />
      <Header />
      <Provider >
        <Loader />
        <Home />
        <Local />
        <Services />
        <PicturesOfServices />
        <AboutMe />
      </Provider>
    </Container>
  );
}

export default App;
