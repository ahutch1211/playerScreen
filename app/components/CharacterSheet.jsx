import React, { Fragment } from 'react';
import reduxForm from 'redux-form/lib/reduxForm';
import styled from 'styled-components';

import Header from 'components/header/index';
import Map from 'components/map/index';
import Navigation from 'components/navigation/index';

const Screen = styled.div`
	position: absolute;
	display: flex;
	align-items: flex-end;
`;
// flex end

const CharacterScreen = ({ data }) => (
	<Fragment>
		<Header />
		<Screen>
			<Map />
			<Navigation />
		</Screen>
	</Fragment>
);

reduxForm({
	form: 'player'
})(CharacterScreen);

export default CharacterScreen;
