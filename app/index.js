import React from 'react';
import ReactDOM from 'react-dom';
import Provider from 'react-redux/lib/components/Provider';
import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import reducer from 'redux-form/lib/reducer';

import CharacterSheet from 'components/CharacterSheet';

const store = createStore(reducer, applyMiddleware(logger));

const appData = {
	character: { id: 12 }
};

ReactDOM.render(
	<Provider store={store}>
		<CharacterSheet data={appData} />
	</Provider>,
	document.getElementById('container')
);
