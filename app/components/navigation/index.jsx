import React, { Component } from 'react';
import styled from 'styled-components';

const SHADOW = 'inset 0px 0px 5px 0px black, 3px 3px 5px black;';
const ACTIVE_SHADOW = 'inset 0px 0px 1px 0px black, 5px 5px 7px black;';
const TABS = {
	CHARACTER: 'character',
	SKILLS: 'skills',
	INVENTORY: 'inventory',
	MAP: 'map',
	GAME_MASTER: 'gameMaster'
};

const Tab = styled.div`
	width: 1em;
	height: 1.25em;
	background-color: white;
	margin: 1em 0;
	border: 1px solid black;
	border-radius: 0 9px 9px 0;
	box-shadow: ${props => (props.active ? ACTIVE_SHADOW : SHADOW)};
	overflow: hidden;
	cursor: pointer;

	&:hover {
		box-shadow: ${ACTIVE_SHADOW};
	}
`;

const Navigation = styled.div`
	align-self: flex-start;
	margin-top: 10em;
`;

export default class NavigationBar extends Component {
	constructor(props) {
		super(props);

		this.state = { tab: TABS.MAP };

		this.handleOnClick = this.handleOnClick.bind(this);

		this.onMapClick = () => this.handleOnClick(TABS.MAP);
		this.onCharacterClick = () => this.handleOnClick(TABS.CHARACTER);
		this.onSkillsClick = () => this.handleOnClick(TABS.SKILLS);
		this.onInventoryClick = () => this.handleOnClick(TABS.INVENTORY);
		this.onGMClick = () => this.handleOnClick(TABS.GAME_MASTER);
	}

	handleOnClick(tab) {
		this.setState({
			tab
		});
	}

	render() {
		const { tab } = this.state;

		return (
			<Navigation>
				<Tab active={tab === TABS.MAP} onClick={this.onMapClick} />
				<Tab active={tab === TABS.CHARACTER} onClick={this.onCharacterClick} />
				<Tab active={tab === TABS.SKILLS} onClick={this.onSkillsClick} />
				<Tab active={tab === TABS.INVENTORY} onClick={this.onInventoryClick} />
				<Tab active={tab === TABS.GAME_MASTER} onClick={this.onGMClick} />
			</Navigation>
		);
	}
}
