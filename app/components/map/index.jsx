import React, { Component } from 'react';
import { Stage, Layer } from 'react-konva';
import { SCREEN_WIDTH, SCREEN_HEIGHT } from 'common/constants';
import Background from 'components/map/background';
import Enemies from 'components/map/enemies';
import Grid from 'components/map/grid';
import Player from 'components/map/player';
import Team from 'components/map/team';

export default class Index extends Component {
  render() {
    return (
      <Stage width={SCREEN_WIDTH} height={SCREEN_HEIGHT}>
        <Layer>
          <Background />
        </Layer>
        <Layer>
          <Grid />
        </Layer>
        <Layer>
          <Team />
        </Layer>
        <Layer>
          <Enemies />
        </Layer>
        <Layer>
          <Player />
        </Layer>
      </Stage>
    );
  }
}
