import React, { Fragment } from 'react';
import { PlayerIcon } from 'components/map/player';

export default () => (
	<Fragment>
		<PlayerIcon posX={100} posY={100} color={'black'} />
		<PlayerIcon posX={150} posY={100} color={'black'} />
		<PlayerIcon posX={200} posY={100} color={'black'} />
	</Fragment>
);
