import React, { Component, Fragment } from 'react';
import { Line } from 'react-konva';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from 'common/constants';
import { GRID_CELL_SIZE } from 'common/map/constants';

const GridLine = ({ points = [] }) => (
	<Line points={points} stroke={'black'} strokeWidth={2} />
);

export default class Grid extends Component {
	constructor(props) {
		super(props);

		this.state = {
			columns: this.getColumns(SCREEN_HEIGHT),
			rows: this.getRows(SCREEN_WIDTH)
		};
	}

	getColumns() {
		const maxColumns = SCREEN_WIDTH / GRID_CELL_SIZE;
		let columns = [];

		for (let i = 0; i < maxColumns; i++) {
			columns.push([i * GRID_CELL_SIZE, 0, i * GRID_CELL_SIZE, SCREEN_HEIGHT]);
		}

		return columns;
	}

	getRows() {
		const maxRows = SCREEN_HEIGHT / GRID_CELL_SIZE;
		let rows = [];

		for (let i = 0; i < maxRows; i++) {
			rows.push([0, i * GRID_CELL_SIZE, SCREEN_WIDTH, i * GRID_CELL_SIZE]);
		}

		return rows;
	}

	render() {
		const { columns, rows } = this.state;

		return (
			<Fragment>
				{columns.map((points, i) => <GridLine key={i} points={points} />)}
				{rows.map((points, i) => <GridLine key={i} points={points} />)}
			</Fragment>
		);
	}
}
