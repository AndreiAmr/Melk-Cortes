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
    
`


export const ButtonsArea = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0 10px;
    margin-top: calc(50% - 37px);

    > button {
        height: 37px;
        width: 37px;
        border-radius: 18.5px;
        border: none;
        outline: none;
        background-image: linear-gradient(to bottom, var(--blue), var(--blue-opacity));
        display: flex;
        justify-content: center;
        align-items: center;
          z-index: 999;


         div {
            background: var(--white);
            width: 12px;
            height: 2px;
        }

        &.arrow-left {
                div{
                    border-radius: 5px;
                    &:first-child {
                        transform: translateY(-3px) translateX(4px) rotate(-30deg);
                    }
                    &:last-child {
                        transform: translateY(2px) translateX(-8px) rotate(30deg);
                    }
                }   
        }

        &.arrow-right{
            div{
                border-radius: 5px;

                &:first-child {
                    transform: translateY(-3px) translateX(5px) rotate(30deg);
                }
                
                &:last-child {
                    transform: translateY(2px) translateX(-7px) rotate(-30deg);
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
    

    > img{ 
        flex: 1;
        min-width: 100%;
        min-height: 100%;
    }

    

`