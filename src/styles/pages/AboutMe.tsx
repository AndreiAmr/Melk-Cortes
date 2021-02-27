import styled from "styled-components";
import PerfilPhoto from "../../images/perfil.jpg";

export const Container = styled.div`
    width: 100%;
    height: 85vh;
    position: relative;
 
  >  .background-image {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        /* z-index: 1; */
        
        background-image: url(${PerfilPhoto});
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;

        filter: blur(6px)

    }
 
`;


export const Content = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background: var(--blue-opacity);
    z-index:99 !important;

    > h1 {
        color: var(--white);
        display: inline-block;
        position: relative;
        margin: 15% 10% 0;
        font-size: 2.2rem;

        &:after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            height: 3px;
            width: 80%;
            background: var(--white)
        }
    }


    > .text-with-image {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        height: 80%;
        padding: 3%;

        > p { 
            color: #fff;
            font-weight: 500;
            max-width: 55vw;
            
        }

        > .perfil { 
            height: 40vh;
            width: 40vw;
            background-image: url(${PerfilPhoto});
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
            border-radius: 10px;
        }
    }
`
