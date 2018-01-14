import React, { Component } from 'react';
import { Image } from 'react-konva';
import map from 'assets/test';
import { SCREEN_WIDTH, SCREEN_HEIGHT } from 'common/constants';

export default class Background extends Component {
	constructor(props) {
		super(props);

		this.state = {
			image: null
		};
	}

	componentDidMount() {
		const image = new window.Image();

		image.src = map;
		image.onload = () => {
			this.setState({
				image: image
			});
		};
	}

	render() {
		return (
			<Image
				image={this.state.image}
				width={SCREEN_WIDTH}
				height={SCREEN_HEIGHT}
			/>
		);
	}
}
