import React, { Fragment } from 'react';
import MoveableIcon from 'components/map/player';

export default () => (
  <Fragment>
    <MoveableIcon
      posX={600}
      posY={200}
      color={'black'}
      stroke={'white'}
      scaleX={2}
      scaleY={2}
    />
    <MoveableIcon posX={650} posY={100} color={'black'} stroke={'white'} />
    <MoveableIcon posX={700} posY={100} color={'black'} stroke={'white'} />
  </Fragment>
);
