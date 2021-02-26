import { Container, Content, Service } from "../styles/pages/services"

function Services(){ 
    return(
        <Container>
            <Content>
                <h1> Serviços </h1>

                <Service>
                    <h2> Corte masculino </h2>
                    <p> - 20,00 R$</p>
                </Service>
                <Service>
                    <h2> Corte infantil </h2>
                    <p> - 15,00 R$</p>
                </Service>
                <Service>
                    <h2> Barba </h2>
                    <p> - 10,00 R$</p>
                </Service>
                <Service>
                    <h2> Barba </h2>
                    <p> - 15,00 R$</p>
                </Service>
                <Service>
                    <h2> Pézinho </h2>
                    <p> - 10,00 R$</p>
                </Service>
            </Content>
        </Container>
    )
}

export default Services