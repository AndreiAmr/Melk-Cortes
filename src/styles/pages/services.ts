import styled from "styled-components";
import Haircut from '../../images/serviceBG.jpeg';
import Haircut3 from '../../images/haircuts/haircut3.jpeg';
import Beard from "../../images/barba.jpg";
import ChildHaircut from "../../images/corte-infantil.jpg";

export const Container = styled.div`
    width: 100%;
    position: relative;
    margin:  50px 0 0;

    
    > h1 { 
        /* font-size: 1.4rem; */
        position: relative;
        color: var(--blue);
        margin: 4%;
        display: inline-flex;
        align-items: center;


        &:after {
            content: '';
            position: absolute;
            bottom: -2px;
            left: 0;
            width: 80%;
            height: 3px;
            background: var(--blue);
        }
    }
`
export const Content = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content:center;
    align-items:center;

`

export const Service = styled.div`
    height: 100px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    margin: 10px;
    background-image: url(${Haircut});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    border-radius: 10px;
    width: 40vw;
    filter: brightness(50%);
    transition: filter .7s ;

    > h2 {
        color: var(--white);
        margin: 10px 0;
        font-size: 1rem;
        font-weight: 500;
        /* text-shadow: 1px 1px 3px rgba(0,0,0,0.4); */
        width: 100%;
        padding-left: 4%;
        display: flex;
        align-items: center;
        
        transition: filter .1s;

        >svg {
            font-size: 1.3rem;
            margin: 0 2%
        }
    }

    > p {
        margin: 5px 20px;
        color: var(--white);
        text-shadow: 1px 1px 3px rgba(0,0,0,0.4);
        margin-left: 12%;
        font-size: .9rem;

    }

    &:hover {
        filter: brightness(100%);

        > h2 {
            filter: blur(0px)
        }
    } 


    &:first-child, &:nth-child(2) {
        width: 45vw;
        height: 50vh;
        margin: 5px;
    }

    &:nth-child(2) {
        background-image: url(${Beard});
        background-repeat: no-repeat;
        background-size: cover;
        background-position: -250px ;
    }

    &:nth-child(3), &:nth-child(4) {
        width: 90vw;
        height: 15vh;
        transition: background-position .7s;
        
        &:hover{ 
            background-position: 0 3%;
        }
    }

    &:nth-child(3) {
        background-image: url(${ChildHaircut});
        background-repeat: no-repeat;
        background-size: center;
        background-position: center ;
    }
    &:nth-child(4) {
        background-image: url(${Haircut3});
        background-repeat: no-repeat;
        background-size: center;
        background-position: 0 -40px ;

        &:hover{ 
            background-position: 0 38%;
        }
    }


    @media(min-width: 1024px){ 

        &:nth-child(1), &:nth-child(2) {
            height: 55vh;
            width: 25%;
        }

        &:nth-child(2) {
            background-position: center;
        }

        &:nth-child(3), &:nth-child(4) {
            width: 50vw;
            height: 30vh;
            
        }
    }
    
`