import React, { Component } from 'react';
import styled from 'styled-components';

const Header = styled.header`
	vertical-align: middle;
	font-wight: bold;
`;

export default class WelcomeMessage extends Component {
	render() {
		const { data: { title = 'missing title' } = {} } = this.props;

		return (
			<Header>
				<h1>{title}</h1>
			</Header>
		);
	}
}
