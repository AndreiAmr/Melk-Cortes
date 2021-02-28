import { Container, Content, Header } from "../styles/pages/home";
import { FaPhone, FaFacebookF } from "react-icons/fa";
import { useContext, useEffect, useState } from "react";
import { LoadingContext } from "../contexts/loadingContext";


function Home() {
    const { handleSetIsHomeLoaded } = useContext(LoadingContext);
    const [ isWavesLoaded, setIsWavesLoaded ] = useState<boolean>(false);
    const [ isRazorLoaded, setIsRazorLoaded ] = useState<boolean>(false);
    const [ isScissorsLoaded, setIsScissorsLoaded ] = useState<boolean>(false);
    
    useEffect(() => {
        if( isRazorLoaded && isWavesLoaded && isScissorsLoaded) return handleSetIsHomeLoaded(true);


        
    },[isRazorLoaded, isWavesLoaded, isScissorsLoaded, handleSetIsHomeLoaded])
    
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
                    <img src={require("../images/navalha.svg").default} alt="Navalha" onLoad={() => setIsRazorLoaded(true)}/>  
                    CORTES 
                    <img src={require("../images/tesoura.svg").default} alt="Navalha" onLoad={() => setIsScissorsLoaded(true)} />
                </h1>

                <button type="button" onClick={() => alert("clicked")}> Agende Agora </button>
                <img src={require("../images/wave.svg").default} alt="waves" onLoad={() => setIsWavesLoaded(true)}/>
            </Content>
        </Container>
    )
}


export default Home;