import React, { Component } from 'react';
import Konva from 'konva';
import { Stage, Layer, Rect, Text, Image, Line } from 'react-konva';
import { debounce } from 'lodash';

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

const GridLine = (points = []) => (
	<Line points={points} stroke={'grey'} strokeWidth={1} />
);

class Grid extends Component {
	constructor(props) {
		super(props);

		this.state = {
			columns: this.getColumns(props.height),
			rows: this.getRows(props.width)
		};
	}

	componentWillReceiveProps(nextProps) {
		if (this.props !== nextProps) {
			this.setState({
				columns: this.getColumns(nextProps.height),
				rows: this.getRows(nextProps.width)
			});
		}
	}

	getColumns(height) {
		const maxColumns = height / LINE_WIDTH;
		let columns = [];

		for (let i = 0; i < maxColumns; i++) {
			columns.push([0, i * LINE_WIDTH, height, i * LINE_WIDTH]);
		}

		return columns;
	}

	getRows(width) {
		const maxRows = width / LINE_WIDTH;
		let rows = [];

		for (let i = 0; i < maxRows; i++) {
			rows.push([i * LINE_WIDTH, 0, i * LINE_WIDTH, width]);
		}

		return rows;
	}

	render() {
		const { columns, rows } = this.state;

		return (
			<Layer>
				{columns.map((points, i) => <GridLine key={i} points={points} />)}
				{rows.map((points, i) => <GridLine key={i} points={points} />)}
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
				<Grid width={width} height={height} />
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
