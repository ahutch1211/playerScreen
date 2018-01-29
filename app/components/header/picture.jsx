import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import characterImage from 'assets/char';

const Image = styled.img`
	border-bottom-right-radius: 50px;
	-moz-border-bottom-right-radius: 50px;
	height: 100%;
`;

const Dropzone = styled.input`
	display: none;
`;

export default class CharacterPicture extends Component {
	constructor(props) {
		super(props);

		this.handleOnDrag = this.handleOnDrag.bind(this);
	}

	handleOnDrag() {
		console.log('Drags onDrags');
	}

	render() {
		return (
			<Fragment>
				<label htmlFor="dropzone">
					<Image src={characterImage} alt="characterPicture" width={107} />
				</label>
				<Dropzone id="dropzone" type="file" onDrag={this.handleOnDrag} />
			</Fragment>
		);
	}
}
