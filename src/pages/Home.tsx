import { Container, Content, Header } from "../styles/pages/home";
import { FaPhone, FaFacebookF } from "react-icons/fa";


function Home() {
    return (
        <Container>
            <Header>
                <p>
                    <FaPhone />
                    (11) 95151-7938
                </p>

                <FaFacebookF />
            </Header>

            <Content>
                <h2>MELK</h2>
                <h1>
                    <img src={require("../images/navalha.svg").default} alt="Navalha"/>  
                    CORTES 
                    <img src={require("../images/tesoura.svg").default} alt="Navalha"/>
                </h1>

                <button type="button" > Agende Agora </button>
                <img src={require("../images/wave.svg").default} alt="waves"/>
            </Content>
        </Container>
    )
}


export default Home;