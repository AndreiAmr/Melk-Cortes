import styled from "styled-components";
import Haircut from '../../images/serviceBG.jpeg';

export const Container = styled.div`
    width: 100%;
    height: 44vh;
    min-height: 370px;
    position: relative;

    background-image: url(${Haircut});
    background-position: center;
    background-repeat:no-repeat;
    background-size: cover; 

    margin: 20px 0;
`


export const Content = styled.div`
    width: 100%;
    height: 100%;

    background: var(--blue-opacity);

    > h1 { 
        font-size: 1.4rem;
        position: relative;
        display: inline-block;
        color: var(--white);
        margin: 4%;
        text-shadow: 1px 1px 3px rgba(0,0,0,0.4);



        &:after {
            content: '';
            position: absolute;
            bottom: -2px;
            left: 0;
            width: 80%;
            height: 3px;
            background: var(--white);
        }
    }
`

export const Service = styled.div`

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 10px 0;

    > h2 {
        color: var(--white);
        margin: 5px 15px;
        font-size: 1.1rem;
        font-weight: 600;
        text-shadow: 1px 1px 3px rgba(0,0,0,0.4);
    }

    > p {
        margin: 0 20px;
        color: var(--white);
        text-shadow: 1px 1px 3px rgba(0,0,0,0.4);

    }


`