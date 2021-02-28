import { Container, Content, Service } from "../styles/pages/services"
import { MdFormatAlignLeft } from 'react-icons/md'
import { useContext, useEffect } from "react"
import { LoadingContext } from "../contexts/loadingContext"

function Services() {
    const { handleSetIsServicesLoaded } = useContext(LoadingContext)

    useEffect(()=>{
        window.addEventListener("load", () => {
            handleSetIsServicesLoaded(true);
        })

        return ()=> {
            window.removeEventListener('load', ()=> {})
        }
    }, [handleSetIsServicesLoaded])
    
    
    return (
        <Container>
                <h1> Serviços <MdFormatAlignLeft/></h1>
            <Content>

                <Service>
                    <h2>
                      Corte adulto
                    </h2>
                    <p> - 20,00 R$</p>
                </Service>
                <Service>
                    <h2>
                         Barba
                    </h2>
                    <p> - 10,00 R$</p>
                </Service>
                <Service>
                    <h2>
                        
                        Corte infantil
                    </h2>
                    <p> - 15,00 R$</p>
                </Service>
                <Service>
                    <h2>
                         Pézinho
                    </h2>
                    <p> - 10,00 R$</p>
                </Service>
            </Content>
        </Container>
    )
}

export default Services