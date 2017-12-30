import React, { Component } from 'react';
import styled from 'styled-components';

import characterImage from 'assets/char';

const Header = styled.div`
	display: flex;
	align-items: stretch;
	position: fixed;
	height: 5em;
	width: 100%;
	top: 0;
	left: 0;
	z-index: 1;
	border: 1px solid black;
	background-color: rgba(255, 255, 255, 0.95);
	/* background-color: #e0e0e0; */
	/* box-shadow: 1px 1px 1px black; */
	-moz-box-shadow: 1px 1px 1px black;
	overflow: hidden;
	box-shadow: inset 0px 11px 8px -10px #ccc, inset 0px -15px 8px -10px #ccc;
`;

const Picture = styled.img`
	border-bottom-right-radius: 50px;
	-moz-border-bottom-right-radius: 50px;
`;

const PlayerInfo = styled.div``;
const Description = styled.div``;
const HP = styled.div``;

const PrimaryText = styled.div`
	font-weight: bold;
	font-size: 2em;
`;

const SecondaryText = styled.div`
	color: rgba(0, 0, 0, 0.24);
	font-size: 0.85em;
`;

const Stats = styled.div``;
const CurrentHP = styled.span``;
const MaxHP = styled.span``;

export default () => (
	<Header>
		<Picture src={characterImage} alt="char" width={100} />
		{/* TODO CROP IMAGES SO THEY DONT DISTORT */}
		<PlayerInfo>
			<PrimaryText>Player Name</PrimaryText>
			<Description>
				<SecondaryText>Race / Background</SecondaryText>
				<SecondaryText>Class / Sub Class</SecondaryText>
			</Description>
		</PlayerInfo>
		<HP>
			<SecondaryText>100 / 150</SecondaryText>
			<PrimaryText>HP</PrimaryText>
		</HP>
	</Header>
);
