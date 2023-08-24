import React from "react";
import { styled } from "styled-components";
import thumbcat from "../img/thumbcat.png";

function Nav2({ profile }) {
	return (
		<NavBar>
			<Logo src={thumbcat} alt="Logo" />
			<MenuList>
				<Menu>랭킹</Menu>
				<Menu>룰</Menu>
				<Menu>일정</Menu>
				<Menu>환급 비용 계산</Menu>
                <Menu>게시판</Menu>
			</MenuList>
			{profile && <Profile>{profile}</Profile>}
		</NavBar>
	);
}

const NavBar = styled.div`
	z-index: 0;
    box-sizing: content-box;
	display: flex;
	top: 0;
	width: 90%;
	height: 6vh;
	justify-content: space-between;
	align-items: center;
	padding: 3% 0;
	/* border: 1px solid; */
`;

const Logo = styled.img`
	width: 15vh;
    height: 15vh;
	border-radius: 22px;
`;

const Profile = styled.div`
	display: flex;
	width: 5rem;
	height: 5rem;
	border-radius: 22px;
	background-color: lightgray;
	justify-content: center;
	align-items: center;
	font-size: 1.5rem;
	font-weight: bold;
`;

const MenuList = styled.div`
    width: 75%;
	display: flex;
    justify-content: flex-start;
    gap: 3rem;
    /* border: 1px solid; */
`;

const Menu = styled.div`
	display: flex;
    font-size: 1.6rem;
    font-weight: bold;
    cursor: pointer;
`;
export default Nav2;
