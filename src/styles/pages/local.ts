import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    min-height: 55vh;
    display: flex;
    flex-direction: column;
    align-items:flex-start;
    justify-content: center;

    > h1 {
        position: relative;
        color: var(--blue);
        display: inline-block;
        margin-left: 4%;
        display: flex;
        align-items: center;

        &:after{ 
            content: "";
            position: absolute;
            bottom: 0;
            left:0;
            width: 80%;
            height: 3px;
            background: var(--blue);
        }
    }

    > p {
        width: 90vw;
        margin: 20px auto;
        color: var(--blue-text);
        font-weight: 500;
    }


    .divisor { 
        width: 80vw;
        height: 2px;
        background: var(--blue);
        margin: 10px auto;
    }

    @media(min-width: 768px){
        > h1 {
            font-size: 2.5rem
        }

        > p { 
            font-size: 1.5rem;
        }
    }
`

export const LeafletMap = styled.div`
    width: 90vw;
    max-width: 400px;
    border: 2px solid var(--blue);
    border-radius: 10px;
    overflow:hidden;
    background: var(--blue);
    margin: 25px auto;
    position: relative;



    > .leaflet-container {
        height: 160px;
        width: 100%;
    }

    > a {
        position: absolute;
        bottom:-3px;
        left: -3px;
        right: -3px;
        height: 30px;
        background-color: var(--blue);
        z-index: 10099;
        
        color: var(--white);
        text-decoration: none;
        font-weight: 600;

        display: flex;
        align-items: center;
        justify-content: space-around;

        font-size: 1rem;


        > svg{ 
            color: var(--golden);
            font-size:1.3rem; 
        }
        
    }
    

    @media(min-width: 768px){

        width: 70vw;
        height: 30vh;
        
        > .leaflet-container {
            height: 100%;
            .marker-icon {
                height: 8vh !important;
                width: 8vh !important;
                margin: -35px !important;
            }
            
        }

        > a {
            height: 20%;
            font-size: 1.2rem;

            > svg {
                font-size: 1.8rem
            }
        }
    }
`