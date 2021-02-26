import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    margin: 0 0 20px;

    > h1 {
        color: var(--blue);
        font-size: 1.3rem;
        margin: 4%
    }
`

export const Slider = styled.div`
    width: 100%;
    min-height: 270px;
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: center;
    
`


export const ButtonsArea = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0 10px;
    width: 100%;
    margin: calc(50% - 18.5px) 0 ;

    > button {
        height: 7vh;
        width: 7vh;
        border-radius: 3.5vh;
        border: none;
        outline: none;
        background-image: linear-gradient(to bottom, var(--blue), var(--blue-opacity));
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 999;
        transition: filter .2s;
        


         div {
            background: var(--white);
            width: 40%;
            height: 3px;
            
            transition: transform .3s;
         }

        &:disabled{
            filter: brightness(.6);

            div {
                &:first-child{ 
                    transform: translateY(0) translateX(9px) rotate(-50deg) !important;
                } 
                &:last-child{ 
                    transform: translateY(0) translateX(-7px) rotate(50deg) !important;
                } 
            }
        }
        

        &.arrow-left {

                div{
                    border-radius: 5px;
                    &:first-child {
                        transform: translateY(-4px) translateX(8px) rotate(-30deg);
                    }
                    &:last-child {
                        transform: translateY(2px) translateX(-8px) rotate(30deg);
                    }
                }   

                &.animation {
                    
                    div { 
                        &:first-child {
                            transform: translateY(0) translateX(8px) rotate(0deg);
                        }
                        
                        &:last-child {
                            transform: translateY(0) translateX(-8px) rotate(0deg);
                        }
                    }
                }
        }

        &.arrow-right{
            div{
                border-radius: 5px;
            
                &:first-child {
                    transform: translateY(-6px) translateX(6px) rotate(30deg);
                }
                &:last-child {
                    transform: translateY(1px) translateX(-10px) rotate(-30deg);
                }

            }   

            &.animation {
                        
                div { 
                    &:first-child {
                        transform: translateY(0) translateX(7px) rotate(0deg);
                    }

                    &:last-child {
                        transform: translateY(0) translateX(-6px) rotate(0deg);
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