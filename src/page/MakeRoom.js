import React, { useState } from "react";
import styled from "styled-components";
import Nav from "../components/Nav";
import { useNavigate } from "react-router-dom";

const MakeRoom = () => {
	const navigate = useNavigate();
	const [page, setPage] = useState(0);
	const [rule, setRule] = useState(-1);

	return (
		<Container>
			<Nav profile="영빈" />
			{page === 0 && (
				<MakeRoomContainer>
					<MakeRoomText>새로운 스터디방 만들기</MakeRoomText>
					<ParticipantNum>
						<MenuText>스터디방 이름</MenuText>
						<MakeRoomInput />
					</ParticipantNum>
					<ParticipantNum>
						<MenuText>스터디방 인원</MenuText>
						<DropDown>
							<option value="1">1명</option>
							<option value="2">2명</option>
							<option value="3">3명</option>
						</DropDown>
					</ParticipantNum>
					<ContinueBtn
						onClick={() => {
							setPage(1);
						}}
					>
						계속하기
					</ContinueBtn>
				</MakeRoomContainer>
			)}
			{page === 1 && (
				<MakeRoomContainer>
					<MakeRoomText>스터디방 일정을 설정하세요</MakeRoomText>
					<ParticipantNum>
						<MenuText>스터디방 일정</MenuText>
						<DropDown>
							<option value="1">1일</option>
							<option value="2">2일</option>
							<option value="3">3일</option>
						</DropDown>
					</ParticipantNum>
					<ContinueBtn
						onClick={() => {
							setPage(2);
						}}
					>
						계속하기
					</ContinueBtn>
				</MakeRoomContainer>
			)}
			{page === 2 && (
				<MakeRoomContainer>
					<MakeRoomText>룰을 선택하세요</MakeRoomText>
					<StyledSelectMenu
						onClick={() => {
							setRule(0);
						}}
						selected={rule === 0}
					>
						1등 200%, 2~4등 100%, 5등 0% 환급
					</StyledSelectMenu>
					<StyledSelectMenu
						onClick={() => {
							setRule(1);
						}}
						selected={rule === 1}
					>
						1등 200%, 2~4등 80%, 5등 60% 환급
					</StyledSelectMenu>
					<ContinueBtn
						onClick={() => {
							navigate("/main");
						}}
					>
						방 만들기
					</ContinueBtn>
				</MakeRoomContainer>
			)}
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

const MakeRoomContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
	width: 60vw;
	height: 70vh;
	margin: auto;
	box-sizing: border-box;
`;

const MakeRoomText = styled.div`
	width: 70%;
	height: 20%;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	font-size: 1.5rem;
	font-weight: bold;
`;

const MenuText = styled.div`
	width: 40%;
	height: 20%;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	font-size: 1.5rem;
	font-weight: 500;
`;

const MakeRoomInput = styled.input`
	width: 100%;
	height: 100%;
	border-radius: 22px;
	border: 2.5px solid;
	font-size: 1.2rem;
	padding-left: 1rem;
	box-sizing: border-box;

	&::placeholder {
		font-size: 1rem;
		color: black;
	}
`;

const ContinueBtn = styled.div`
	width: 30%;
	height: 15%;
	margin-top: 5rem;
	border-radius: 22px;
	background-color: black;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 1.5rem;
	color: white;
	cursor: pointer;
`;

const ParticipantNum = styled.div`
	display: flex;
	justify-items: center;
	align-items: center;
	width: 70%;
	height: 15%;
`;

const DropDown = styled.select`
	width: 100%;
	height: 100%;
	border-radius: 22px;
	border: 2.5px solid;
	font-size: 1.5rem;
	padding-left: 1rem;
	box-sizing: border-box;

	&::after {
		content: "▼";
		font-size: 1.5rem;
		position: absolute;
		top: 50%;
		right: 1rem;
		transform: translateY(-50%);
	}
`;

const StyledSelectMenu = styled.div`
	width: 70%;
	height: 20%;
	border: 2.5px solid lightgray;
	border-radius: 22px;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 1.8rem;
	cursor: pointer;
	border-color: ${(props) => (props.selected ? "black" : "lightgray")};
`;

export default MakeRoom;
