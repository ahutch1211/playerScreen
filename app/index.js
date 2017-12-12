import React from 'react';
import ReactDOM from 'react-dom';
import WelcomeMessage from 'components/WelcomeMessage';

const appData = {
	title: 'React App Placeholder'
};

ReactDOM.render(
	<WelcomeMessage data={appData} />,
	document.getElementById('container')
);
