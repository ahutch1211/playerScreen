import React, { Component } from 'react';
import { Stage, Layer } from 'react-konva';
import styled from 'styled-components';
import { CANVAS_WIDTH, CANVAS_HEIGHT } from 'common/map/constants';
import Background from 'components/map/background';
import Grid from 'components/map/grid';
import Player from 'components/map/player';
import Team from 'components/map/team';

const Battleground = styled.div`
	display: table;
	margin-top: 6em;
	padding: 0.5em 0.5em 0.5em;
	border: 2px solid black;
	background-color: #f4f4f4;
	box-shadow: 5px 5px 7px black;
	border-radius: 15px;
`;

export default class Index extends Component {
	render() {
		return (
			<Battleground>
				<Stage width={CANVAS_WIDTH} height={CANVAS_HEIGHT}>
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
						<Player />
					</Layer>
				</Stage>
			</Battleground>
		);
	}
}
