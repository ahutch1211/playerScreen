import React, { Component } from 'react';
import Konva from 'konva';
import { Stage, Layer, Rect, Text, Image, Line } from 'react-konva';

import map from 'assets/test';
import { LINE_WIDTH } from 'common/constants';

class ColoredRect extends Component {
	constructor(props) {
		super(props);

		this.state = {
			color: 'white'
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
				x={50}
				y={100}
				width={25}
				height={25}
				fill={this.state.color}
				shadowBlur={2}
				onClick={this.handleOnClick}
				draggable
				stroke={'black'}
				strokeWidth={2}
			/>
		);
	}
}

class Map extends Component {
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
		const { width, height } = this.props;

		return <Image image={this.state.image} width={width} height={height} />;
	}
}

const column = index => (
	<Line
		points={[index * LINE_WIDTH, 0, index * LINE_WIDTH, window.innerHeight]}
		stroke={'grey'}
		strokeWidth={1}
	/>
);

const row = index => (
	<Line
		points={[0, index * LINE_WIDTH, window.innerWidth, index * LINE_WIDTH]}
		stroke={'grey'}
		strokeWidth={1}
	/>
);

class Grid extends Component {
	constructor(props) {
		super(props);

		this.state = {
			columns: [],
			rows: []
		};

		this.currentHeight = window.innerHeight;
		this.currentWidth = window.innerWidth;
	}

	getColumns() {}

	getRows() {
		let row = [];
	}

	render() {
		return (
			<Layer>
				<Line
					points={[0, 0, 0, window.innerHeight]}
					stroke={'grey'}
					strokeWidth={1}
				/>
				<Line
					points={[50, 0, 50, window.innerHeight]}
					stroke={'grey'}
					strokeWidth={1}
				/>
				<Line
					points={[100, 0, 100, window.innerHeight]}
					stroke={'grey'}
					strokeWidth={1}
				/>
			</Layer>
		);
	}
}

export default class Index extends Component {
	constructor(props) {
		super(props);

		this.state = {
			width: window.innerWidth,
			height: window.innerHeight
		};

		this.updateDimensions = this.updateDimensions.bind(this);
	}

	updateDimensions() {
		this.setState({
			width: window.innerWidth,
			height: window.innerHeight
		});
	}

	componentDidMount() {
		window.addEventListener('resize', this.updateDimensions);
	}

	componentWillUnmount() {
		window.removeEventListener('resize', this.updateDimensions);
	}
	render() {
		const shouldShowMap = true;
		const { width, height } = this.state;

		return (
			<Stage width={width} height={height}>
				{shouldShowMap && (
					<Layer>
						<Map width={width} height={height} />
					</Layer>
				)}
				<Grid />
				<Layer>
					{/* <Text text="beta 1.0" /> */}
					<ColoredRect />
				</Layer>
			</Stage>
		);
	}
}

/*

				<Rect
					x={100}
					y={100}
					width={50}
					height={50}
					fill={'white'}
					shadowBlur={1}
					onClick={this.handleOnClick}
				/>
				*/
