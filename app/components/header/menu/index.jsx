import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import Dropdown from 'components/header/menu/dropdown';

const Container = styled.div`
	/* display: flex;
	flex-direction: column;
	height: 100%; */
`;

const Button = styled.div`
	align-self: center;
	width: 2em;
	height: 2em;
	padding: 1.5em;
	cursor: pointer;
	overflow: hidden;
	border: ${props => (props.active ? '1px solid black' : 'auto')};
	background-color: ${props => (props.active ? '#373737' : 'auto')};

	&:hover {
		border: ${props =>
			props.active ? '1px solid black' : '1px solid lightgrey'};
		background-color: ${props => (props.active ? '#373737' : '#dfdce3')};
	}
`;

const Icon = () => (
	<Fragment>
		<hr />
		<hr />
		<hr />
	</Fragment>
);

export default class Menu extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isActive: false
		};

		this.handleOnClick = this.handleOnClick.bind(this);
	}

	handleOnClick() {
		this.setState({
			isActive: !this.state.isActive
		});
	}

	render() {
		return (
			<Container>
				<Button active={this.state.isActive} onClick={this.handleOnClick}>
					<Icon />
				</Button>
				<Dropdown isOpen={this.state.isActive} />
			</Container>
		);
	}
}
