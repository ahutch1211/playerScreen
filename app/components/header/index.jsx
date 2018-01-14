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
	background-color: rgba(255, 255, 255, 0.9);
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

const Section = styled.div`
	align-self: flex-end;
	padding: 0.5em;
`;

const PrimaryText = styled.div`
	font-weight: bold;
	font-size: 2em;
`;

const PrimaryTextSmall = styled(PrimaryText)`
	font-size: 1em;
`;

const SecondaryText = styled.div`
	color: rgba(0, 0, 0, 0.24);
	font-size: 0.85em;
`;

const Dark = styled.span`
	color: black;
`;

const Stats = styled.div``;
const CurrentHP = styled.span``;
const MaxHP = styled.span``;

const Separator = <Dark>-</Dark>;

export default () => (
	<Header>
		<Picture src={characterImage} alt="characterPicture" width={100} />
		{/* TODO CROP IMAGES SO THEY DONT DISTORT */}
		<Section>
			<SecondaryText>Race {Separator} Background</SecondaryText>
			<SecondaryText>Class {Separator} Sub Class</SecondaryText>
			<PrimaryTextSmall>Player Name</PrimaryTextSmall>
		</Section>
		<Section>
			<SecondaryText>100 {Separator} 150</SecondaryText>
			<PrimaryTextSmall>HP</PrimaryTextSmall>
		</Section>
		<Section>
			<SecondaryText>8</SecondaryText>
			<PrimaryTextSmall>AP</PrimaryTextSmall>
		</Section>
		<Section>
			<SecondaryText>XXXXXXXX</SecondaryText>
			<SecondaryText>XXXXXXXX</SecondaryText>
			<PrimaryTextSmall>Status</PrimaryTextSmall>
		</Section>
		<Section>
			<SecondaryText>Tokens</SecondaryText>
			<SecondaryText>Gold</SecondaryText>
			<PrimaryTextSmall>Currency</PrimaryTextSmall>
		</Section>
		<Section>
			<SecondaryText>Multiplier</SecondaryText>
			<SecondaryText>Damage Die</SecondaryText>
			<PrimaryTextSmall>Attack</PrimaryTextSmall>
		</Section>
		<Section>
			<SecondaryText>16</SecondaryText>
			<PrimaryTextSmall>Armor Class</PrimaryTextSmall>
		</Section>
		<Section>
			<SecondaryText>90</SecondaryText>
			<PrimaryTextSmall>Movement</PrimaryTextSmall>
		</Section>
		<Section>
			<SecondaryText>6</SecondaryText>
			<PrimaryTextSmall>Proficiency</PrimaryTextSmall>
		</Section>
		<Section>
			<SecondaryText>4</SecondaryText>
			<PrimaryTextSmall>Initiative</PrimaryTextSmall>
		</Section>
	</Header>
);
