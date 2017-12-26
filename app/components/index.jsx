import React, { Fragment } from 'react';
import { reduxForm } from 'redux-form';

import Header from 'components/header/index';
import Map from 'components/map/index';

const CharacterSheet = ({ data }) => (
	<Fragment>
		<Header />
		<Map />
	</Fragment>
);

reduxForm({
	form: 'player'
})(CharacterSheet);

export default CharacterSheet;
