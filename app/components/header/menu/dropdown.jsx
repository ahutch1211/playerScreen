import React, { Component } from 'react';
import styled from 'styled-components';
import execute from 'common/execute';

const Container = styled.div`
	width: 20em;
	height: 25em;
	background-color: #373737;
	border: 1px solid black;
	box-shadow: 5px 5px 7px black;
`;

export default class Dropdown extends Component {
	constructor(props) {
		super(props);

		this.dropdownRef = node => (this.dropdown = node);

		this.handleOnClick = this.handleOnClick.bind(this);
	}

	handleOnClick(event) {
		if (this.dropdown && !this.dropdown.contains(event.target)) {
			execute(this.props.onClick);
		}
	}

	componentDidMount() {
		document.addEventListener('click', this.handleOnClick);
	}

	componentWillUnmount() {
		document.removeEventListener('click', this.handleOnClick);
	}

	render() {
		return (
			<Container innerRef={this.dropdownRef}>
				<div>Testing</div>
			</Container>
		);
	}
}
