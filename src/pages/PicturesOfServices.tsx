import { ButtonsArea, Container, Slider, SliderContentArea } from "../styles/pages/PicturesOfServices";
import Haircut1 from "../images/haircuts/haircut1.jpeg";
import Haircut2 from "../images/haircuts/haircut2.jpeg";
import Haircut3 from "../images/haircuts/haircut3.jpeg";
import Haircut4 from "../images/haircuts/haircut4.jpeg";
import { useState } from "react";

function PicturesOfServices() {
    const [currentImage, setCurrentImage] = useState<number>(1);
    const [transformLeft, setTransformLeft] = useState(0);
    
    function handleSlideRight() {
        if( currentImage === 4) return;
        setCurrentImage(currentImage + 1);
        setTransformLeft(transformLeft + 100);
        
    }

    function handleSlideLeft() {
        if( currentImage === 1) return;
        setCurrentImage(currentImage - 1);
        setTransformLeft(transformLeft - 100);
        
    }
    
    return (
        <Container>
            <h1> Imagens do meu trabalho</h1>

            <Slider>
                <SliderContentArea style={{transform: `translateX(-${transformLeft}%)`}}>
                    <img src={Haircut1} alt="Corte de cabelo" />
                    <img src={Haircut2} alt="Corte de cabelo" />
                    <img src={Haircut3} alt="Corte de cabelo" />
                    <img src={Haircut4} alt="Corte de cabelo" />
                </SliderContentArea>
                <ButtonsArea>
                    <button type="button" className="arrow-left" onClick={handleSlideLeft}>
                        <div></div>
                        <div></div>
                    </button>

                    <button type="button" className="arrow-right" onClick={handleSlideRight}>  
                        <div></div>
                        <div></div>

                    </button>

                </ButtonsArea>
            </Slider>

        </Container>
    )
};

export default PicturesOfServices;