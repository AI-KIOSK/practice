import React from "react";
import styled from "styled-components";
import Nav from "../components/Nav";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
	const navigate = useNavigate();
	return (
		<Container>
			<Nav profile={null} />
			<SignUpContainer>
				<SignUpText>회원가입</SignUpText>
				<SignUpInput placeholder="이메일 주소" />
				<CheckID>
					<IdInput placeholder="아이디" />
					<DupCheck>중복확인</DupCheck>
				</CheckID>
				<SignUpInput placeholder="비밀번호" />
				<SignUpInput placeholder="비밀번호 재확인" />
				<SignUpInput placeholder="이름" />
				<SignUpBtn
					onClick={() => {
						navigate("/");
					}}
				>
					가입하기
				</SignUpBtn>
			</SignUpContainer>
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

const SignUpContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
	width: 40%;
	height: 95%;
	margin: auto;
	box-sizing: border-box;
`;

const SignUpText = styled.div`
	width: 70%;
	height: 10%;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 1.8rem;
	font-weight: bold;
`;

const SignUpInput = styled.input`
	width: 70%;
	height: 11%;
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

const SignUpBtn = styled.div`
	width: 70%;
	height: 10%;
	border-radius: 22px;
	background-color: black;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 1.5rem;
	color: white;
	cursor: pointer;
`;

const CheckID = styled.div`
	display: flex;
	width: 70%;
	height: 11%;
`;

const IdInput = styled.input`
	width: 70%;
	height: 100%;
	border-radius: 22px 0px 0px 22px;
	background-color: #ececec;
	border: none;
	font-size: 1.2rem;
	padding-left: 1rem;
	box-sizing: border-box;

	&::placeholder {
		font-size: 1rem;
		color: black;
	}
`

const DupCheck = styled.div`
	width: 30%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 0px 22px 22px 0px;
	background-color: #CACACA;
	border: none;
	font-size: 1rem;
	box-sizing: border-box;
	cursor: pointer;
`;

export default SignUp;
