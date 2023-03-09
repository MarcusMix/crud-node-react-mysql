import styled from "styled-components";

export const Wrapper = styled.div`
	font-family: "Poppins";
`;

export const ButtonStyled = styled.button`
	padding: 0.5rem;
	border-radius: 0.7rem;
	cursor: pointer;
	color: #000;
	background-color: #32cd32;
	border: 4px #32cd32 solid;
	transition: 250ms ease-in-out;
	font-size: 16px;
	margin-top: 5px;
	box-shadow: rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px;

	:hover {
		border: 4px #32cd32 solid;
		background-color: transparent;
		transition: 250ms ease-in-out;
	}
`;

export const ButtonDelete = styled(ButtonStyled)`
	background-color: #ff1744;
	border: 4px #ff1744 solid;

	:hover {
		border: 4px #ff1744 solid;
		background-color: transparent;
		transition: 250ms ease-in-out;
	}
`;

export const ButtonCancel = styled(ButtonStyled)`
	background-color: #ffc400;
	border: 4px #ffc400 solid;

	:hover {
		border: 4px #ffc400 solid;
		background-color: transparent;
		transition: 250ms ease-in-out;
	}
`;
