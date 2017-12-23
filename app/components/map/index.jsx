import React, { Component } from 'react';
import { Stage, Layer } from 'react-konva';
import { CANVAS_WIDTH, CANVAS_HEIGHT } from 'common/constants';
import Background from 'components/map/background';
import Grid from 'components/map/grid';
import Player from 'components/map/player';

export default class Index extends Component {
	render() {
		const shouldShowMap = true;

		return (
			<Stage width={CANVAS_WIDTH} height={CANVAS_HEIGHT}>
				{shouldShowMap && (
					<Layer>
						<Background />
					</Layer>
				)}
				<Layer>
					<Grid />
				</Layer>
				<Layer>
					{/* <Text text="beta 1.0" /> */}
					<Player />
				</Layer>
			</Stage>
		);
	}
}
