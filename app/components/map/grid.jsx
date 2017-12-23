import React, { Component, Fragment } from 'react';
import { Line } from 'react-konva';
import { CANVAS_WIDTH, CANVAS_HEIGHT, GRID_CELL_SIZE } from 'common/constants';

const GridLine = ({ points = [] }) => (
	<Line points={points} stroke={'grey'} strokeWidth={1} />
);

export default class Grid extends Component {
	constructor(props) {
		super(props);

		this.state = {
			columns: this.getColumns(CANVAS_HEIGHT),
			rows: this.getRows(CANVAS_WIDTH)
		};
	}

	getColumns() {
		const maxColumns = CANVAS_WIDTH / GRID_CELL_SIZE;
		let columns = [];

		for (let i = 0; i < maxColumns; i++) {
			columns.push([i * GRID_CELL_SIZE, 0, i * GRID_CELL_SIZE, CANVAS_HEIGHT]);
		}

		return columns;
	}

	getRows(width) {
		const maxRows = CANVAS_HEIGHT / GRID_CELL_SIZE;
		let rows = [];

		for (let i = 0; i < maxRows; i++) {
			rows.push([0, i * GRID_CELL_SIZE, CANVAS_WIDTH, i * GRID_CELL_SIZE]);
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
