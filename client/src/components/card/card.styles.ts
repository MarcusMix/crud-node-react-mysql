import styled from "styled-components"

export const CardStyled = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border: 4px solid black;
    margin: 1rem 20%;
    cursor: pointer;
    border-radius: 0.7rem;
    min-width: 650px;
    
    :hover {
        border: 4px solid #FF4858;
        transition: 250ms ease-in-out;
    }

    & h1 {
        font-size: 2.5rem;
        color: #8b8a8b;
    }
    
    & p {
        font-size: 2rem;
        padding: 1rem;
        color: #8b8a8b;
    }
`