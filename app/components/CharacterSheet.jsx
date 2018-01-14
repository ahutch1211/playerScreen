import React, { Component } from 'react';
import reduxForm from 'redux-form/lib/reduxForm';
import styled from 'styled-components';

import { SCREEN_HEIGHT, SCREEN_WIDTH, TABS } from 'common/constants';
import Header from 'components/header/index';
import Map from 'components/map/index';
import Skills from 'components/skills/index';
import Navigation from 'components/navigation/index';

const FORM_NAME = 'player';

const Container = styled.div`
	display: table;
	margin: 0 auto;
`;

const Frame = styled.div`
	display: flex;
	align-items: flex-end;
`;

const Screen = styled.div`
	height: ${SCREEN_HEIGHT}px;
	width: ${SCREEN_WIDTH}px;
	margin-top: 6em;
	padding: 0.5em 0.5em 0.5em;
	border: 2px solid black;
	background-color: #f4f4f4;
	box-shadow: 5px 5px 7px black;
	border-radius: 15px;
`;

class CharacterScreen extends Component {
	constructor(props) {
		super(props);

		this.state = { tab: TABS.MAP };

		this.handleOnTabChange = this.handleOnTabChange.bind(this);
	}

	handleOnTabChange(tab) {
		this.setState({
			tab
		});
	}

	render() {
		const { tab } = this.state;

		return (
			<Container>
				<Header />
				<Frame>
					<Screen>
						{tab === TABS.MAP && <Map />}
						{tab === TABS.SKILLS && <Skills />}
					</Screen>
					<Navigation tab={tab} onTabChange={this.handleOnTabChange} />
				</Frame>
			</Container>
		);
	}
}

export default reduxForm({ form: FORM_NAME })(CharacterScreen);
