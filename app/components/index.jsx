import React from 'react';
import { reduxForm } from 'redux-form';
import styled from 'styled-components';

import Map from 'components/map/index';

const Container = styled.div`
	vertical-align: middle;
	font-wight: bold;
`;

const CharacterSheet = ({ data }) => (
	<Container>
		<Map />
	</Container>
);

reduxForm({
	form: 'player'
})(CharacterSheet);

export default CharacterSheet;
