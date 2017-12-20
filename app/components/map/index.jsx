import React, { Component } from 'react';
import Konva from 'konva';
import { Stage, Layer, Rect, Text } from 'react-konva';

class ColoredRect extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			color: 'green'
		};

		this.handleOnClick = this.handleOnClick.bind(this);
	}

	handleOnClick() {
		this.setState({
			color: Konva.Util.getRandomColor()
		});
	}

	render() {
		return (
			<Rect
				x={20}
				y={20}
				width={50}
				height={50}
				fill={this.state.color}
				shadowBlur={5}
				onClick={this.handleOnClick}
			/>
		);
	}
}

export default class Index extends Component {
	render() {
		return (
			<Stage width={window.innerWidth} height={window.innerHeight}>
				<Layer>
					<Text text="Try click on rect" />
					<ColoredRect />
				</Layer>
			</Stage>
		);
	}
}
