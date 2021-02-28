import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    margin: 20px 0;
    overflow: hidden;
`

export const Slider = styled.div`
    width: 100%;
    max-height: 270px;
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: center;
    
    @media(min-width: 768px) {
        height: 35vh;
        max-height: none;
        width: 90%;
        margin: 0 auto;
        border-radius: 10px;

        >div {
            /* border: 10px solid black; */
        }
    }

    @media(min-width: 1024px) {
        width: 90vw;
        height: 90vh
    }
    
`


export const ButtonsArea = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0 10px;
    width: 100%;
    margin: calc(50% - 18.5px) 0 ;

    > button {
        border-radius: 3.5vh;
        border: none;
        outline: none;
        background: none;
        /* background-image: linear-gradient(to bottom, var(--blue), var(--blue-opacity)); */
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 999;
        transition: filter .2s;
        cursor: pointer;
        height: 50px;
        width: 50px;
        -webkit-tap-highlight-color: rgba(0,0,0,0);

         div {
            background: var(--white);
            box-shadow: 1px 2px 5px black;
            width: 25px;
            height: 3px;
            
            transition: transform .3s;
         }

        &:disabled{
            filter: brightness(.6);

            div {
                &:first-child{ 
                    transform: translateY(0) translateX(15px) rotate(-50deg) !important;
                } 
                &:last-child{ 
                    transform: translateY(0) translateX(-8px) rotate(50deg) !important;
                } 
            }
        }
        

        &.arrow-left {

                div{
                    border-radius: 5px;
                    &:first-child {
                        transform: translateY(-9px) translateX(16px) rotate(-30deg);
                    }
                    &:last-child {
                        transform: translateY(2px) translateX(-8px) rotate(30deg);
                    }
                }   

                &.animation {
                    
                    div { 
                        &:first-child {
                            transform: translateY(0) translateX(9px) rotate(0deg);
                        }
                        
                        &:last-child {
                            transform: translateY(0) translateX(-12px) rotate(0deg);
                        }
                    }
                }
        }

        &.arrow-right{
            div{
                border-radius: 5px;
            
                &:first-child {
                    transform: translateY(-12px) translateX(8px) rotate(30deg);
                }
                &:last-child {
                    transform: translateY(0) translateX(-16px) rotate(-30deg);
                }

            }   

            &.animation {
                        
                div { 
                    &:first-child {
                        transform: translateY(0) translateX(7px) rotate(0deg);
                    }

                    &:last-child {
                        transform: translateY(0) translateX(-14px) rotate(0deg);
                    }
                }
            }
        
        }
    }
    
`

export const SliderContentArea = styled.div`
    position: absolute;
    bottom: 0;
    left:0;
    top:0;
    right: 0;
    display: flex;
    transform: translateX(0);
    transition: transform .5s ease-out;    

    > div{
        min-width: 100vw;
        height: 100%;
        img { 
            flex: 1;
            min-width: 100vw;
            max-height: 100%;
        }
    }

    

`