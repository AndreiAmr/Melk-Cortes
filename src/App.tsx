import { Container, GlobalStyles } from "./styles/appStyle";
import Home from "./pages/Home";
import Local from "./pages/Local";

function App() {
  return (
    <Container>
      <Home />
      <Local />
      <GlobalStyles />
    </Container>
  );
}

export default App;
