import { ButtonsArea, Container, Slider, SliderContentArea } from "../styles/pages/PicturesOfServices";
import Haircut1 from "../images/haircuts/haircut1.jpeg";
import Haircut2 from "../images/haircuts/haircut2.jpeg";
import Haircut3 from "../images/haircuts/haircut3.jpeg";
import Haircut4 from "../images/haircuts/haircut4.jpeg";
import { useContext, useEffect, useState } from "react";
import { LoadingContext } from "../contexts/loadingContext";

function PicturesOfServices() {
    let [currentImage, setCurrentImage] = useState<number>(1);
    const [transformLeft, setTransformLeft] = useState(0);
    const [ animateLeftButton, setAnimateLeftButton ] = useState<boolean>(false);
    const [ animateRightButton, setAnimateRightButton ] = useState<boolean>(false);
    const [imagesLoaded, setImagesLoaded] = useState<number>(0);

    const { handleSetIsPicturesOfServiceLoaded } = useContext(LoadingContext) 
    

    const imagesPathList = [
        Haircut1,
        Haircut2,
        Haircut3,
        Haircut4,
    ] as string[];

    useEffect(() => {
        
        if(imagesLoaded === imagesPathList.length) handleSetIsPicturesOfServiceLoaded(true);
        
    }, [imagesLoaded, imagesPathList.length, handleSetIsPicturesOfServiceLoaded])
    
    
    async function handleSlideRight() {
        setAnimateRightButton(true);
        setCurrentImage(currentImage + 1);
        setTransformLeft(transformLeft + 100);

        
        setTimeout(() => {
            setAnimateRightButton(false);
        }, 200)
    }

    function handleSlideLeft() {
        setAnimateLeftButton(true);
        setCurrentImage(currentImage - 1);
        setTransformLeft( transformLeft - 100);

        setTimeout(() => {
            setAnimateLeftButton(false);
        }, 200)
    }

    return (
        <Container>
            <h1> Imagens do meu trabalho</h1>

            <Slider>
                <SliderContentArea style={{ transform: `translateX(-${transformLeft}%)` }}>
                    {imagesPathList.map((url, indice) => (
                        <div key={indice}>
                            <img src={url} alt="Corte de cabelo" onLoad={() => setImagesLoaded(imagesLoaded + 1) }/>
                        </div>
                    ))}
                </SliderContentArea>
                <ButtonsArea>
                    <button type="button" className={`arrow-left ${animateLeftButton && 'animation' }`} onClick={handleSlideLeft} disabled={currentImage === 1}>
                        <div></div>
                        <div></div>
                    </button>

                    <button type="button" className={`arrow-right ${animateRightButton && 'animation' }`} onClick={handleSlideRight} disabled={currentImage === imagesPathList.length} >
                        <div></div>
                        <div></div>

                    </button>

                </ButtonsArea>
            </Slider>

        </Container>
    )
};

export default PicturesOfServices;