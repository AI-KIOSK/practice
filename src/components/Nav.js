import React from "react";
import { styled } from "styled-components";
import thumbcat from "../img/thumbcat.png";

function Nav({ profile }) {
	return (
		<NavBar>
			<Logo src={thumbcat} alt="Logo" />
			{profile && <Profile>{profile}</Profile>}
		</NavBar>
	);
}

const NavBar = styled.div`
	z-index: 0;
	box-sizing: content-box;
	position: fixed;
	display: flex;
	top: 0;
	width: 90%;
	height: 20vh;
	justify-content: space-between;
	align-items: center;
	padding: 3% 0;
	/* border: 1px solid; */
`;

const Logo = styled.img`
	width: 15%;
	border-radius: 22px;
`;

const Profile = styled.div`
	display: flex;
	width: 6rem;
	height: 6rem;
	border-radius: 22px;
	background-color: lightgray;
	justify-content: center;
	align-items: center;
	font-size: 1.5rem;
	font-weight: bold;
`;
export default Nav;
