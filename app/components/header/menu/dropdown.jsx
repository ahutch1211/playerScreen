import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
	width: 20em;
	height: 25em;
	background-color: #373737;
	border: 1px solid black;
	box-shadow: 5px 5px 7px black;
	display: ${props => (props.open ? 'auto' : 'none')};
`;

export default class Dropdown extends Component {
	render() {
		return (
			<Container open={this.props.isOpen}>
				<div>Testing</div>
			</Container>
		);
	}
}
