import React, { Component } from 'react';
import { Rect } from 'react-konva';
import { PLAYER_SIZE, CANVAS_WIDTH, CANVAS_HEIGHT } from 'common/constants';

export default class Player extends Component {
	constructor(props) {
		super(props);

		this.handleOnDrag = this.handleOnDrag.bind(this);

		this.boundingBox = {
			x: CANVAS_WIDTH - PLAYER_SIZE,
			y: CANVAS_HEIGHT - PLAYER_SIZE
		};
	}

	handleOnDrag(pos) {
		return {
			x:
				pos.x < 0 ? 0 : pos.x > this.boundingBox.x ? this.boundingBox.x : pos.x,
			y: pos.y < 0 ? 0 : pos.y > this.boundingBox.y ? this.boundingBox.y : pos.y
		};
	}

	render() {
		const { posX = 50, posY = 100, color = 'white' } = this.props;

		return (
			<Rect
				x={posX}
				y={posY}
				width={25}
				height={25}
				fill={color}
				shadowBlur={2}
				draggable
				dragBoundFunc={this.handleOnDrag}
				stroke={'black'}
				strokeWidth={2}
			/>
		);
	}
}
