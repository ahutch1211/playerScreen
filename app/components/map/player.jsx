import React, { Component } from 'react';
import { Rect } from 'react-konva';
import Konva from 'konva';
import { PLAYER_SIZE, CANVAS_WIDTH, CANVAS_HEIGHT } from 'common/constants';

export default class Player extends Component {
	constructor(props) {
		super(props);

		this.boundary = {
			x: CANVAS_WIDTH - PLAYER_SIZE,
			y: CANVAS_HEIGHT - PLAYER_SIZE
		};
		this.shadowOffset = { x: 2, y: 2 };

		this.tween = null;
		this.playerRef = node => (this.playerIcon = node);
		this.handleOnDragBound = this.handleOnDragBound.bind(this);
		this.handleOnDragStart = this.handleOnDragStart.bind(this);
		this.handleOnDragEnd = this.handleOnDragEnd.bind(this);
	}

	handleOnDragStart(event) {
		var shape = event.target;

		if (this.tween) {
			this.tween.pause();
		}

		shape.setAttrs({
			shadowOffset: {
				x: 10,
				y: 10
			},
			scale: {
				x: 1.2,
				y: 1.2
			}
		});
	}

	handleOnDragEnd(event) {
		var shape = event.target;

		this.tween = new Konva.Tween({
			node: shape,
			duration: 0.5,
			easing: Konva.Easings.ElasticEaseOut,
			scaleX: 1,
			scaleY: 1,
			shadowOffsetX: this.shadowOffset.x,
			shadowOffsetY: this.shadowOffset.y
		});

		this.tween.play();
	}

	handleOnDragBound(pos) {
		return {
			x: pos.x < 0 ? 0 : pos.x > this.boundary.x ? this.boundary.x : pos.x,
			y: pos.y < 0 ? 0 : pos.y > this.boundary.y ? this.boundary.y : pos.y
		};
	}

	render() {
		const { posX = 50, posY = 100, color = 'white' } = this.props;

		return (
			<Rect
				ref={this.playerRef}
				x={posX}
				y={posY}
				width={PLAYER_SIZE}
				height={PLAYER_SIZE}
				fill={color}
				shadowOffset={this.shadowOffset}
				shadowBlur={2}
				stroke={'black'}
				strokeWidth={2}
				draggable
				dragBoundFunc={this.handleOnDragBound}
				onDragStart={this.handleOnDragStart}
				onDragEnd={this.handleOnDragEnd}
			/>
		);
	}
}
