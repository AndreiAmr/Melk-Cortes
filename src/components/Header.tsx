import { useEffect, useState } from "react";
import { Container, MenuButtonContainer, ButtonsMobileArea } from "../styles/components/header";

export default function Menu() {
    const [isMenuVisible, setIsMenuVisible] = useState<boolean>(false)
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)

    useEffect(() => {
        window.addEventListener('scroll', handleOnScroll)
    }, [isMenuOpen])


    function handleOnScroll() {
        const { scrollY } = window;
        if (scrollY >= 500) return setIsMenuVisible(true);
        setIsMenuOpen(false);
        setIsMenuVisible(false);
    }

    function handleNavigateToHome(){
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    function handleNavigateToLocal(){
        window.scrollTo({
            top: 420,
            behavior: "smooth"
        })
    }

    function handleNavigateToServices(){
        window.scrollTo({
            top: 860,
            behavior: "smooth"
        })
    }

    function handleNavigateToAboutMe(){
        window.scrollTo({
            top: 1700,
            behavior: "smooth"
        })
    }

    return (
        <Container className={`${isMenuVisible && 'visible'}`}>

            <ButtonsMobileArea  className={`${isMenuOpen && 'show-buttons'}`}>
                <button type="button" onClick={handleNavigateToHome}>Home</button>
                <button type="button" onClick={handleNavigateToLocal}>Localidade</button>
                <button type="button" onClick={handleNavigateToServices}>Serviços</button>
                <button type="button" onClick={handleNavigateToAboutMe}>Sobre mim</button>
            </ButtonsMobileArea>

            <MenuButtonContainer className={`${isMenuOpen && 'menu-open'}`} onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <div className="menu-bar"></div>
                <div className="menu-bar"></div>
                <div className="menu-bar"></div>
            </MenuButtonContainer>
        </Container>
    )
} 