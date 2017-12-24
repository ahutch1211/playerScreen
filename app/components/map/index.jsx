import React, { Component } from 'react';
import { Stage, Layer } from 'react-konva';
import { CANVAS_WIDTH, CANVAS_HEIGHT } from 'common/map/constants';
import Background from 'components/map/background';
import Grid from 'components/map/grid';
import Player from 'components/map/player';
import Team from 'components/map/team';

export default class Index extends Component {
	render() {
		return (
			<Stage width={CANVAS_WIDTH} height={CANVAS_HEIGHT}>
				<Layer>
					<Background />
				</Layer>
				<Layer>
					<Grid />
				</Layer>
				<Layer>
					<Player />
				</Layer>
				<Layer>
					<Team />
				</Layer>
			</Stage>
		);
	}
}
