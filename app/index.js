import React from 'react';
import ReactDOM from 'react-dom';
import CharacterSheet from 'components/CharacterSheet';
//import { applyMiddleware, createStore } from 'redux';

// // Logger with default options
// import logger from 'redux-logger';
// const store = createStore(reducer, applyMiddleware(logger));

const appData = {
	character: { id: 12 }
};

ReactDOM.render(
	<CharacterSheet data={appData} />,
	document.getElementById('container')
);
