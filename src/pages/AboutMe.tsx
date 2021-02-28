import { useContext, useEffect } from "react";
import { LoadingContext } from "../contexts/loadingContext";
import { Container, Content } from "../styles/pages/AboutMe";


export default function AboutMe() {
    const {handleSetIsAboutMeLoaded} = useContext(LoadingContext);

    useEffect(() => {
        
        window.addEventListener('load', ()=> {
           handleSetIsAboutMeLoaded(true)
        })
        
        return () => {
            window.removeEventListener('load', ()=> {});
        }
        
    }, [handleSetIsAboutMeLoaded])
    

    

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