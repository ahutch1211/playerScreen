import React, { Component } from 'react';
import styled from 'styled-components';

import characterImage from 'assets/char';

const Header = styled.div`
	display: flex;
	position: fixed;
	height: 5em;
	width: 100%;
	top: 0;
	left: 0;
	z-index: 1;
	border: 1px solid black;
	background-color: #f4f4f4;
	box-shadow: 1px 1px 1px black;
	-moz-box-shadow: 1px 1px 1px black;
	overflow: hidden;
`;

const PlayerInfo = styled.div`
	font-family: fantasy;
`;

const Name = styled.div`
	font-weight: bold;
	font-size: 2em;
`;

const Description = styled.div`
	color: #777;
`;

const Picture = styled.img`
	border: 1px solid lightgrey;
	border-bottom-right-radius: 50px;
	-moz-border-bottom-right-radius: 50px;
`;

export default () => (
	<Header>
		<Picture src={characterImage} alt="char" width={100} />
		{/* TODO CROP IMAGES SO THEY DONT DISTORT */}
		<PlayerInfo>
			<Name>Player Name</Name>
			<Description>Human / Rogue / Cleric</Description>
		</PlayerInfo>
	</Header>
);
