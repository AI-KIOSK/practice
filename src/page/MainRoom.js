import React from "react";
import styled from "styled-components";
import Nav from "../components/Nav";
import { useNavigate } from "react-router-dom";

const MainRoom = () => {
	const navigate = useNavigate();
	const rooms = [
		{ name: "프론트엔드", color: "lightblue" },
		{ name: "백엔드", color: "greenyellow" },
		{ name: "AIKIOSK", color: "lightpink" },
	];

	return (
		<Container>
			<Nav profile="영빈" />
			<MainContainer>
				<MenuList>
					<MenuBtn
						onClick={() => {
							navigate("/makeroom");
						}}
					>
						방 만들기
					</MenuBtn>
					<MenuBtn
						onClick={() => {
							navigate("/enter");
						}}
					>
						참여하기
					</MenuBtn>
				</MenuList>
				<RoomList>
					{rooms.map((room, index) => (
						<Room key={index} bgColor={room.color}>
							{room.name}
						</Room>
					))}
				</RoomList>
			</MainContainer>
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

const MainContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
	width: 35%;
	height: 55%;
	margin: auto;
`;

const MenuList = styled.div`
	display: flex;
	justify-content: space-between;
	width: 100%;
	height: 25%;
`;

const MenuBtn = styled.div`
    z-index: 2;
	width: 48%;
	height: auto;
	border: 2.5px solid lightgray;
	border-radius: 22px;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 1.8rem;
	cursor: pointer;

	&:hover {
		border-color: black;
	}
`;

const RoomList = styled.div`
	display: grid;
	box-sizing: border-box;
	grid-template-columns: repeat(4, 1fr);
	grid-gap: 1.2rem;
	width: 100%;
	height: 60%;
	background-color: #ececec;
	border-radius: 22px;
	padding: 1.2rem;
`;

const Room = styled.div`
	height: 6rem;
	display: flex;
	text-align: center;
	justify-content: center;
	align-items: center;
	background-color: ${(props) => props.bgColor};
	border-radius: 22px;
	font-size: 1.3rem;
	font-weight: bold;
	box-sizing: border-box;
	padding: 0.5rem;
	cursor: pointer;

	&:hover {
		border: 1px solid;
		border-color: black;
	}
`;

export default MainRoom;
