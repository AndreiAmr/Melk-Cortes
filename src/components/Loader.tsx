import Lottie from "react-lottie";
import { Container } from "../styles/components/Loader";
import Animation from "../images/loader-animation.json";
import { useContext } from "react";
import { LoadingContext } from "../contexts/loadingContext";

export default function Loader() { 
    const { isSiteReadyToShowUp } = useContext(LoadingContext)

    if(isSiteReadyToShowUp) return null
    
    return(
        <Container>
            <Lottie options={{
                animationData: Animation,
                autoplay: true,
                loop: true
            }}>

            </Lottie>
        </Container>
    )
}