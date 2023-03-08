import styled from "styled-components"

export const CardStyled = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border: 1px solid black;
    margin: 1rem 20%;

    & h1 {
        font-size: 3.5rem;
    }

    & p {
        font-size: 2rem;
        padding: 1rem;
    }
`