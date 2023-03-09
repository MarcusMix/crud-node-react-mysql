import styled from "styled-components";

export const Wrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
    background-color: #1e232e;
    min-height: 100vh;


	& h1 {
		text-align: center;
		font-size: 60px;
		padding: 1rem;
		color: #fff;
	}

	& button {
		padding: 1rem;
		border-radius: 0.7rem;
		cursor: pointer;
		color: #000;
		background-color: #32cd32;
		border: 4px #32cd32 solid;
		transition: 250ms ease-in-out;
		font-size: 16px;
		margin-top: 5px;
	}

	& button:hover {
		border: 4px #32cd32 solid;
		background-color: transparent;
		color: #fff;
		transition: 250ms ease-in-out;
	}

    svg {
        vertical-align: -8%;
        padding: 1px;
    }
`;

export const CreateCard = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	& input {
		border-radius: 0.7rem;
		padding: 1rem;
		margin: 0.5rem;
		width: 400px;
		background-color: #000;
		border: 4px #8b8a8b solid;
		font-size: 16px;
		transition: 180ms ease-in-out;
        color: #E6DFD9;
	}

	& input:focus {
		border-color: #ff81d0;
		outline: 3px solid transparent;
        color: #E6DFD9;
	}
`;
