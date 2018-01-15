import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import Dropdown from 'components/header/menu/dropdown';

const Button = styled.div`
	width: 2em;
	height: 2em;
	padding: 1.5em;
	cursor: pointer;
	margin-left: auto;
	border-width: ${props => (props.active ? '0px 1px' : '0px')};
	background-color: ${props => (props.active ? '#373737' : 'auto')};

	&:hover {
		border-width: ${props => (props.active ? '0px 1px' : '0px')};
		border-color: ${props => (props.active ? 'black' : 'lightgrey')};
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
			<Fragment>
				<Button active={this.state.isActive} onClick={this.handleOnClick}>
					<Icon />
				</Button>
				<Dropdown isOpen={this.state.isActive} />
			</Fragment>
		);
	}
}
