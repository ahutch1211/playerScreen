import React, { Component } from 'react';
import styled from 'styled-components';

const Header = styled.header`
	vertical-align: middle;
	font-wight: bold;
`;

export default class WelcomeMessage extends Component {
	render() {
		const { data: { title = 'Hello World  =)' } = {} } = this.props;

		return (
			<Header>
				<h1>`Welcome to ${title}.`</h1>
			</Header>
		);
	}
}
