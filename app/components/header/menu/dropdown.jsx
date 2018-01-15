import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
	width: 15em;
	height: 10em;
	background-color: white;
`;

/* display: ${props => (props.open ? 'auto' : 'none')}; */

export default class Dropdown extends Component {
	render() {
		return (
			<Container open={this.props.isOpen}>
				<div>Testing</div>
			</Container>
		);
	}
}
