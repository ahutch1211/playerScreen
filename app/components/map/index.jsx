import React, { Component } from 'react';
import styled from 'styled-components';
import Konva from 'konva';
import { Stage, Layer, Rect, Text, Image, Line } from 'react-konva';
import { debounce } from 'lodash';

import map from 'assets/test';
import { LINE_WIDTH } from 'common/constants';

const MapIndex = styled.div`
	&:after {
		content: '';
		position: absolute;
		height: 100%;
		width: 100%;
		top: 0;
		left: 0;
		background: linear-gradient(to bottom, #000 2px, transparent 2px),
			linear-gradient(to right, #000 2px, transparent 2px);
		background-size: 10%;
		background-color: rgba(255, 0, 0, 0.2);
		padding: 1px;
	}
`;

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
			<MapIndex>
				<Stage width={width} height={height}>
					{shouldShowMap && (
						<Layer>
							<Map width={width} height={height} />
						</Layer>
					)}
					<Layer>
						{/* <Text text="beta 1.0" /> */}
						<ColoredRect />
					</Layer>
				</Stage>
			</MapIndex>
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
