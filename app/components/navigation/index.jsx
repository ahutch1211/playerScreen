import React from 'react';
import styled from 'styled-components';

const Temp = styled.div`
	width: 100%;
	height: 2.5em;
	background-color: white;
	margin: 0.25em 0;
	/* transform: rotate(90deg); */
	border: inlet 2px solid black;
	border-radius: 0 10px 10px 0;
`;

const Navigation = styled.div`
	align-self: flex-start;
	margin-top: 10em;
`;

export default () => (
	<Navigation>
		<Temp>
			<div>Test</div>
		</Temp>
		<Temp>
			<div>More</div>
		</Temp>
	</Navigation>
);

/*

	-ms-transform: rotate(90deg); /* IE 9 
	-moz-transform: rotate(90deg); /* Firefox 
	-webkit-transform: rotate(90deg); /* Safari and Chrome 
    -o-transform: rotate(90deg); /* Opera 
    
    */
