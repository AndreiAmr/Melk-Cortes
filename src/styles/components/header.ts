import styled from "styled-components";

const Container = styled.div`
    position: fixed;
    bottom: 10vh;
    right: 7%;
    height: 10vh;
    width: 10vh;
    max-height: 60px;
    max-width: 60px;

    z-index: 100000;
    border-radius: 5vh;
    background: var(--blue-opacity);
    transform: translateX(200%);
    transition: transform 1s;

    /* display: flex;
    flex-direction: column-reverse;
     */

    &.visible { 
        transform: translateX(0)
    }

`

const MenuButtonContainer = styled.div`
    width:100%;
    height:100%;
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    
    > .menu-bar{ 
        background: var(--white);
        width: 60%;
        height: 3px;
        margin: 3px;
        transform: 0;
        transition: transform .5s;
        border-radius: 10px
    }


    &.menu-open { 
        > .menu-bar:first-child{ 
            transform: rotate(-50deg) translateY(190%) translateX(-20%);
            
        }

        > .menu-bar:nth-child(2){ 
            transform: translateX(150%);
            
        }

        > .menu-bar:last-child{ 
            transform: rotate(50deg) translateY(-190%) translateX(-15%);
          
        }

        
    }
`

const ButtonsMobileArea  = styled.div`
    display: none;
    position: absolute;
    right: 0;
    bottom: 25vh;
    
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;

    > button { 
        margin:0;
        margin-bottom: 10px;
        outline: none;
        /* height: 25px; */
        font-size: 1.3rem;
        padding: 5px 8px;
        text-align: center;

        background: var(--blue);
        border: 1px solid var(--white);

        border-radius: 5px;
        font-weight: 500;
        color: var(--white);

        animation: hideButton .7s forwards;

        transform: translateX(150%);
        transition: transform .7s;
     

        @keyframes showButton {
            from {
                transform:translateX(150%)
            }
            
            to {
                transform:translateX(0%);
            }
        }

    }

    &.show-buttons { 
        display: flex;

        > button { 
            &:first-child {
                animation: showButton .7s forwards;
            }

            &:nth-child(2) {
                animation: showButton .7s forwards;
                animation-delay: .2s
            }
            
            &:nth-child(3) {
                animation: showButton .7s forwards;
                animation-delay: .4s
            }
            
            &:nth-child(4) {
                animation: showButton .7s forwards;
                animation-delay: .6s;
            }

    }
    }
    
`

export { 
    Container,
    MenuButtonContainer,
    ButtonsMobileArea
}