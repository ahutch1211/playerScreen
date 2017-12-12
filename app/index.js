import React from 'react';
import ReactDOM from 'react-dom';
import Main from 'components/index';

const appData = {
	title: 'React App Placeholder'
};

ReactDOM.render(<Main data={appData} />, document.getElementById('container'));
