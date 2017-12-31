import React from 'react';
import reduxForm from 'redux-form/lib/reduxForm';
import styled from 'styled-components';

import Header from 'components/header/index';
import Map from 'components/map/index';
import Navigation from 'components/navigation/index';

const Container = styled.div`
	display: table;
	margin: 0 auto;
`;

const Screen = styled.div`
	display: flex;
	align-items: flex-end;
`;

const CharacterScreen = ({ data }) => (
	<Container>
		<Header />
		<Screen>
			<Map />
			<Navigation />
		</Screen>
	</Container>
);

reduxForm({
	form: 'player'
})(CharacterScreen);

export default CharacterScreen;
