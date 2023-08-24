import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Nav2 from "../components/Nav2";

const Plan = () => {
	const navigate = useNavigate();
	// 스터디원 목록, 나의 이번 주 계획 받아오기
	const rooms = [
		{ name: "프론트엔드", color: "lightblue" },
		{ name: "백엔드", color: "greenyellow" },
		{ name: "AIKIOSK", color: "lightpink" },
	];

	const users = [
		{ name: "진혁" },
		{ name: "영빈" },
		{ name: "용운" },
		{ name: "소현" },
	];

	return (
		<Container>
			<Nav2 profile="영빈" />
			<ContentView>
				<RoomTab>
					{rooms.map((room, index) => (
						<Room key={index} bgColor={room.color}>
							{room.name}
						</Room>
					))}
				</RoomTab>
				<UserTab>
					{users.map((user, index) => (
						<User key={index} bgColor={user.color}>
							{user.name}
						</User>
					))}
				</UserTab>
				<ContentTab1>
					<RoundedBox>
						<BoxTitle>나의 이번 주 계획</BoxTitle>
						<BoxBody>어쩌구</BoxBody>
					</RoundedBox>
					<DayBox>
						<Week>이번주 D - 5 일</Week>
						<Total>스터디 D - 4 주</Total>
					</DayBox>
				</ContentTab1>
				<ContentTab2>
					<RoundedBox>
						<BoxTitle>나의 이번 주 계획</BoxTitle>
						<BoxBody>어쩌구</BoxBody>
					</RoundedBox>
					<QNABox>
						<QNATitle>Q&A</QNATitle>
						<QNABody>
							프론트엔드로 가려면 어떤 언어를 공부해야할까요?{"\n"}
							여기서 MAU의 기준이 어떻게 될까요?{"\n"}
							NoSQL과 RDBMS의 가장 큰 차이가 뭐죠?
						</QNABody>
                        <QNABtn>모두보기</QNABtn>
					</QNABox>
				</ContentTab2>
			</ContentView>
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

const ContentView = styled.div`
	width: 100%;
	height: 100%;
	bottom: 0;
	background-color: #979797;
	display: flex;
`;

const RoomTab = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	gap: 1rem;
	width: 10%;
	height: 100%;
	background-color: #ececec;
	padding: 1.2rem;
`;
const UserTab = styled(RoomTab)`
	background-color: #cacaca;
`;
const ContentTab1 = styled(RoomTab)`
	background-color: #ededed;
	width: 25%;
	justify-content: space-around;
`;
const ContentTab2 = styled(RoomTab)`
	background-color: #ededed;
	width: 55%;
	justify-content: space-around;
`;

const Room = styled.div`
	width: 5rem;
	height: 5rem;
	display: flex;
	text-align: center;
	justify-content: center;
	align-items: center;
	background-color: ${(props) => props.bgColor};
	border-radius: 22px;
	font-size: 1.1rem;
	font-weight: 600;
	box-sizing: border-box;
	padding: 0.5rem;
	cursor: pointer;

	&:hover {
		border: 2px solid;
		border-color: white;
	}
`;

const User = styled(Room)`
	background-color: #ececec;
`;

const RoundedBox = styled.div`
	width: 90%;
	height: 65%;
`;

const BoxTitle = styled.div`
	background-color: #dbdbdb;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 20%;
	border-radius: 22px 22px 0 0;
	font-size: 1.6rem;
`;

const BoxBody = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 80%;
	border-radius: 0 0 22px 22px;
	background-color: white;
`;
const DayBox = styled.div`
	width: 90%;
	height: 35%;
`;

const Week = styled.div`
	background-color: black;
	border: 2px solid white;
	color: white;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 50%;
	border-radius: 22px 22px 0 0;
	font-size: 1.4rem;
`;

const Total = styled.div`
	background-color: black;
	border: 2px solid white;
	color: white;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 50%;
	border-radius: 0 0 22px 22px;
	font-size: 1.4rem;
`;

const QNABox = styled.div`
	width: 90%;
	height: 35%;
`;

const QNATitle = styled.div`
	background-color: #cacaca;
	border: 2px solid white;
	color: black;
	display: flex;
	position: fixed;
	justify-content: center;
	align-items: center;
	width: 6%;
	height: 10%;
	border-radius: 22px 0 0 0;
	font-size: 1.4rem;
`;

const QNABody = styled.div`
	background-color: white;
	border: 3px solid white;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 75%;
	border-radius: 22px 22px 0 0;
	font-size: 1.4rem;
	padding-left: 15%;
	white-space: pre-line;
	line-height: 1.5;
`;

const QNABtn = styled.div`
	background-color: #cacaca;
	border: 2px solid white;
	color: black;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 25%;
	border-radius: 0 0 22px 22px;
	font-size: 1.4rem;
    cursor: pointer;
`

export default Plan;
