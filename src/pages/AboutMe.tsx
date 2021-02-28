import { useContext, useEffect, useState } from "react";
import { LoadingContext } from "../contexts/loadingContext";
import { Container, Content } from "../styles/pages/AboutMe";


export default function AboutMe() {
    const {handleSetIsAboutMeLoaded} = useContext(LoadingContext)
    
    const [isBackgroundLoaded, setIsBackgroundLoaded] = useState<boolean>();
    const [isPerfilLoaded, setIsPerfilLoaded] = useState<boolean>();

    useEffect(() => {
        
        window.addEventListener('load', handleSetContentIsLoaded)

        if(isBackgroundLoaded && isPerfilLoaded) {
            handleSetIsAboutMeLoaded(true)
        }
        
        
        return () => {
            window.removeEventListener('load', handleSetContentIsLoaded);
        }
        
    }, [isBackgroundLoaded, isPerfilLoaded])
    

    function handleSetContentIsLoaded(){

        setIsBackgroundLoaded(true);
        setIsPerfilLoaded(true);

    }
    

    return (
        <Container >
            <div className="background-image" />
            <Content>
                <h1> Sobre mim </h1>

                <div className="text-with-image">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tincidunt tortor id arcu convallis eleifend. Etiam fringilla, leo in rutrum pretium, arcu neque ultrices odio.
                    </p>
                    <div className="perfil"  />
                </div>
            </Content>
        </Container>
    )
}