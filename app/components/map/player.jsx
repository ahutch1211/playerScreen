import React, { Component } from 'react';
import { Rect } from 'react-konva';
import Konva from 'konva';
import { SCREEN_WIDTH, SCREEN_HEIGHT } from 'common/constants';
import { PLAYER_SIZE } from 'common/map/constants';

export const Icon = ({
  innerRef,
  posX,
  posY,
  color,
  shadowOffset,
  onDragBound = null,
  ...rest
}) => (
  <Rect
    ref={innerRef}
    x={posX}
    y={posY}
    width={PLAYER_SIZE}
    height={PLAYER_SIZE}
    fill={color}
    shadowBlur={2}
    strokeWidth={2}
    dragBoundFunc={onDragBound}
    {...rest}
  />
);

export default class Player extends Component {
  constructor(props) {
    super(props);

    const { scaleX = 1, scaleY = 1 } = props;

    this.boundary = {
      x: SCREEN_WIDTH - PLAYER_SIZE * scaleX,
      y: SCREEN_HEIGHT - PLAYER_SIZE * scaleY
    };
    this.shadowOffset = { x: scaleX * 2, y: scaleY * 2 };

    this.tween = null;
    this.playerRef = node => (this.playerIcon = node);
    this.handleOnDragBound = this.handleOnDragBound.bind(this);
    this.handleOnDragStart = this.handleOnDragStart.bind(this);
    this.handleOnDragEnd = this.handleOnDragEnd.bind(this);
  }

  handleOnDragStart(event) {
    const { scaleX = 1, scaleY = 1 } = this.props;
    let shape = event.target;

    if (this.tween) {
      this.tween.pause();
    }

    shape.setAttrs({
      shadowOffset: {
        x: this.shadowOffset.x * 3,
        y: this.shadowOffset.y * 3
      },
      scale: {
        x: scaleX * 1.2,
        y: scaleY * 1.2
      }
    });
  }

  handleOnDragEnd(event) {
    const { scaleX = 1, scaleY = 1 } = this.props;

    this.tween = new Konva.Tween({
      node: event.target,
      duration: 0.5,
      scaleX: scaleX,
      scaleY: scaleY,
      easing: Konva.Easings.ElasticEaseOut,
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
    const {
      posX = 50,
      posY = 100,
      color = 'white',
      stroke = 'black',
      ...rest
    } = this.props;

    return (
      <Icon
        innerRef={this.playerRef}
        posX={posX}
        posY={posY}
        color={color}
        stroke={stroke}
        shadowOffset={this.shadowOffset}
        onDragBound={this.handleOnDragBound}
        onDragStart={this.handleOnDragStart}
        onDragEnd={this.handleOnDragEnd}
        draggable
        {...rest}
      />
    );
  }
}
