import styled from "styled-components";

export const Container = styled.div`
    /* min-width: 100vw; */
    width: 100%;
    margin: 0;
    background-image: linear-gradient(to bottom, var(--blue), var(--blue) );
    background-repeat: no-repeat;
    overflow: hidden;
`

export const Header = styled.div`
    width: 100%;
    height: 50px;

    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;
    border-bottom: 1px solid white;


    >p{ 
        color: var(--white);
        font-weight: 500;
        display: flex;
        align-items: center;
        
        > svg {
            margin: 0 4px;
            transform: rotate(100deg)
        }
    }

    > svg { 
        color: var(--white);
        font-size: 1.3rem; 
    }
`


export const Content = styled.main`
    display: flex;
    flex-direction: column;
    align-items:center;
    position: relative;
    overflow: hidden;

    

    > h2 {
        font-size: 2rem;
        color: var(--golden);
        margin: 15% auto 15px;
    }

    > h1 { 
        display: flex;
        justify-content: center;
        align-items: center;
        color: #fff;
        font-size:2.2rem; 

        > img:first-child{  
            margin:0 5px
        }   
    }

    > button { 
        outline: none;
        background: none;

        color: var(--white);

        padding: 3% 10px;
        margin: 15% 0 0;

        border: 3px solid var(--golden);
        border-radius: 7px;

        font-size: 1rem;
        font-weight: 600; 
    }

    > img {
        margin-top: 10vh;
    }

    &:after{ 
        position: absolute;
        content: '';
        bottom: -2px;
        left: 0;
        right: 0;
        height: 7px;
        border: 1px solid var(--white);
        background-color: var(--white)
    }
`