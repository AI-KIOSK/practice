import React from "react";
import styled from "styled-components";
import Nav from "../components/Nav";
import { useNavigate } from "react-router-dom";

const Login = () => {
	const navigate = useNavigate();

	return (
		<Container>
			<Nav profile={null}/>
			<LoginContainer>
				<LoginInput placeholder="아이디" />
				<LoginInput placeholder="비밀번호" />
				<LoginBtn onClick={()=>{navigate('/main')}}>로그인</LoginBtn>
				<SubMenu>
					<Menu onClick={()=>{navigate('/signup')}}>회원가입</Menu>
					<Menu>아이디 찾기</Menu>
					<Menu>비밀번호 찾기</Menu>
				</SubMenu>
			</LoginContainer>
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

const LoginContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
	width: 40%;
	height: 50%;
	margin: auto;
`;

const LoginInput = styled.input`
	width: 70%;
	height: 20%;
	border-radius: 22px;
	background-color: #ececec;
    border: none;
	font-size: 1.2rem;
    padding-left: 1rem;
    box-sizing: border-box;

	&::placeholder {
        font-size: 1rem;
        color: black;
	}
`;

const LoginBtn = styled.div`
	width: 70%;
	height: 20%;
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

export default Login;
