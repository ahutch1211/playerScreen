import React, { Fragment } from 'react';
import { Icon } from 'components/map/player';

export default () => (
  <Fragment>
    <Icon posX={100} posY={100} color={'red'} stroke={'black'} />
    <Icon posX={150} posY={100} color={'green'} stroke={'black'} />
    <Icon posX={200} posY={100} color={'blue'} stroke={'black'} />
  </Fragment>
);
