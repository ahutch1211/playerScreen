import React, { Fragment } from 'react';
import { reduxForm } from 'redux-form';
import styled from 'styled-components';

import Header from 'components/header/index';
import Map from 'components/map/index';

const Battleground = styled.div`
	display: table;
	margin: 0 auto;
	padding: 1em;
	border: 2px solid black;
	background-color: white;
	-moz-box-shadow: 5px 5px 7px black;
	-moz-border-bottom-right-radius: 15px;
	-moz-border-radius: 15px;
	-webkit-box-shadow: 5px 5px 7px black;
	-webkit-border-bottom-right-radius: 15px;
	-webkit-border-radius: 15px;
	-box-shadow: 5px 5px 7px black;
	-border-bottom-right-radius: 15px;
	-border-radius: 15px;
`;

const CharacterSheet = ({ data }) => (
	<Fragment>
		<Header />
		<Battleground>
			<Map />
		</Battleground>
	</Fragment>
);

reduxForm({
	form: 'player'
})(CharacterSheet);

export default CharacterSheet;
