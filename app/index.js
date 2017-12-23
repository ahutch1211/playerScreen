import React from 'react';
import ReactDOM from 'react-dom';
import CharacterSheet from 'components/index';
//import { applyMiddleware, createStore } from 'redux';

// // Logger with default options
// import logger from 'redux-logger';
// const store = createStore(reducer, applyMiddleware(logger));

const appData = {
	title: 'Character Sheet',
	character: { id: 12 }
};

ReactDOM.render(
	<CharacterSheet data={appData} />,
	document.getElementById('container')
);
