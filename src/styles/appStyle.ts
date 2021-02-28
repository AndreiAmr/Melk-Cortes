import styled, { createGlobalStyle } from "styled-components";

export const Container = styled.div`
    width: 100%;
`

export const GlobalStyles = createGlobalStyle`
    *{
        padding: 0;
        margin: 0%;
        box-sizing: border-box;
        font-family: 'Orbitron', sans-serif;
    }


    html, body, #root {
        min-width: 100vw;
        max-width: 100vw;
        width: 100%;
        overflow-x: hidden;
        background: #ffffff;

        :root {
            --blue: #0085E5;
            --golden: #EFF31E;
            --white: #ffffff;
            --blue-text: #2272AB;
            --blue-opacity: #0085E577
        }

    }
    
`

