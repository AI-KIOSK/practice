import React from "react";
import styled from "styled-components";
import Nav from "../components/Nav";
import { useNavigate } from "react-router-dom";

const EnterRoom = () => {
	const navigate = useNavigate();

	return (
		<Container>
			<Nav profile="영빈"/>
			<EnterContainer>
				<CodeInput placeholder="참여코드" />
				<EnterBtn onClick={()=>{navigate('/lobby')}}>참여하기</EnterBtn>
			</EnterContainer>
		</Container>
	);
};

const Container = styled.div`
	width: 100%;
	height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const EnterContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
	width: 40%;
	height: 30%;
	margin: auto;
`;

const CodeInput = styled.input`
	width: 70%;
	height: 40%;
	border-radius: 22px;
	background-color: #ececec;
    border: none;
	font-size: 1.3rem;
    padding-left: 1rem;
    box-sizing: border-box;

	&::placeholder {
        font-size: 1.3rem;
        color: black;
	}
`;

const EnterBtn = styled.div`
	width: 50%;
	height: 40%;
	border-radius: 22px;
    background-color: black;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 1.5rem;
    color: white;
    cursor: pointer;
`;

const SubMenu = styled.div`
    display: flex;
    justify-content: space-between;
    width: 65%;
	cursor: pointer;
`

const Menu = styled.div`
    font-weight: bold;
    font-size: 1.1rem;
`

export default EnterRoom;
