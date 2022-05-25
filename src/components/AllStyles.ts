import styled from "@emotion/styled";
import { Paper } from "@mui/material";
import { Box, Container } from "@mui/system";


export const StyledContainer = styled(Container)`
	padding-top: 10px;
	padding-bottom: 5px;
	minHeight: 100vh;
`;

export const StyledProgressBar = styled('div')`
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const StyledForm = styled('form')`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const StyledPaper = styled(Paper)`
	display: flex;
	jsutify-content: center;
	align-items: center;
	padding: 20px;
	background-color: #64b5f6;
`;

export const StyledBox = styled(Box)`
	flex: 0 0 50%;

`;

export const StyledBoxTop = styled(Box)`
	display: flex;
	jsutify-content: center;
	align-items: center;
	flex-wrap: wrap;
	margin-bottom: 10px;
`;

export const StyledBottomBtnCards = styled(Box)`
	display: flex;
	justify-content: space-around;
	align-items: flex-start;
	flex-wrap: wrap;
	padding: 10px 0;
`;

export const StyledPaperCard = styled(Paper)`
	padding: 10px;
	flex: 0 0 12.5%;
	color: white;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	cursor: pointer;
	transition: all .3s linear;

	&:hover {
		background-color: #3a589d;
	}

	& > *:not(:last-child) {
		margin-bottom: 10px;
	}
`;