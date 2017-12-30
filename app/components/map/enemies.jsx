import React, { Fragment } from 'react';
import { PlayerIcon } from 'components/map/player';

export default () => (
	<Fragment>
		<PlayerIcon posX={200} posY={100} color={'black'} />
		<PlayerIcon posX={250} posY={100} color={'black'} />
		<PlayerIcon posX={300} posY={100} color={'black'} />
	</Fragment>
);
