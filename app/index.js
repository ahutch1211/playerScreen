import React from 'react';
import ReactDOM from 'react-dom';
import Index from 'components/index';

const appData = {
	title: 'React App Placeholder'
};

ReactDOM.render(<Index data={appData} />, document.getElementById('container'));
