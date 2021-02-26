import { Container, GlobalStyles } from "./styles/appStyle";
import Home from "./pages/Home";
import Local from "./pages/Local";
import Services from "./pages/Services";

function App() {
  return (
    <Container>
      <GlobalStyles />
      <Home />
      <Local />
      <Services />
    </Container>
  );
}

export default App;
