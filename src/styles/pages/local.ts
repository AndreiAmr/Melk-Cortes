import styled from "styled-components";

export const Container = styled.div`
    width: 100%;

    > h1 {
        position: relative;
        color: var(--blue);
        display: inline-block;
        margin-left: 4%;

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
        width: 75vw;
        height: 2px;
        background: var(--blue);
        margin: 10px auto;
    }
`

export const LeafletMap = styled.div`
    width: 80vw;
    border: 2px solid var(--blue);
    border-radius: 10px;
    overflow:hidden;
    background: var(--blue);
    margin: 25px auto 0;
    position: relative;



    > .leaflet-container {
        height: 140px;
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
        font-size: .9rem; 
        font-weight: 600;

        display: flex;
        align-items: center;
        justify-content: space-around;


        > svg{ 
            color: var(--golden);
            font-size:1rem; 
        }
        
    }
    
`