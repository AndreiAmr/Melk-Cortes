import styled from "styled-components";

export const Container = styled.div`
    /* min-width: 100vw; */
    width: 100%;
    margin: 0;
    background-image: linear-gradient(to bottom, var(--blue), var(--blue) );
    background-repeat: no-repeat;
    overflow: visible ;
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

    @media(min-width: 768px){ 
        height: 70px;
        
        > p { 
            font-size: 1.8rem;
        }

        >svg{ 
            font-size: 1.8rem;
        }
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
        margin: 5% 0 0;

        border: 3px solid var(--golden);
        border-radius: 7px;

        font-size: 1rem;
        font-weight: 600; 
    }

    > img {
        margin-top: 10vh;
        pointer-events: none;
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


    @media(min-width: 768px){
        height: 45vh;
        /* flex-direction: col; */
        align-items:center;

        >h2, h1 {
            margin: 2.5% 0 ;
        }

        >button {
            margin: 0;
            font-size: 1.8rem;
        }

        >img{
            position: absolute;
            bottom: 0;
            margin-top: 0;
        }

        &:after{
            height: 10px;
         }
    
    }

    @media(min-width: 1024px) {
        height: 90vh;

        >h2 {
            font-size: 2.5rem;
        }

        > h1 {
            font-size: 2.8rem
        }

        > button { 
            border: 0;

            padding: 5px;
            cursor: pointer;
            background-image: linear-gradient(to bottom, var(--golden), rgba(0,0,0,.0));
            background-repeat: no-repeat;

            background-position: 0 -100px;
            transition: background-position .5s, color .5s, filter .5s;
            filter: brightness(80%);
        
            &:hover{ 
                background-position: 0 0;
                color: var(--blue-text);
                filter: brightness(100%);

            }
            
        }
    }
`