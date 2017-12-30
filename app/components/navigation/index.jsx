import React from 'react';
import styled from 'styled-components';

const Tab = styled.div`
	width: 1em;
	height: 1.25em;
	background-color: white;
	margin: 1em 0;
	border: 1px solid black;
	border-radius: 0 9px 9px 0;
	box-shadow: inset 0px 0px 5px 0px black, 3px 3px 5px black;
	overflow: hidden;

	&:hover {
		box-shadow: inset 0px 0px 2px 0px black, 5px 5px 7px black;
	}
`;

const Navigation = styled.div`
	align-self: flex-start;
	margin-top: 10em;
`;

const Label = styled.div`
	transform: rotate(90deg);
	padding-left: 1.5em;
`;

export default () => (
	<Navigation>
		<Tab />
		<Tab />
		<Tab />
		<Tab />
		<Tab />
	</Navigation>
);

/*

	-ms-transform: rotate(90deg); /* IE 9 
	-moz-transform: rotate(90deg); /* Firefox 
	-webkit-transform: rotate(90deg); /* Safari and Chrome 
    -o-transform: rotate(90deg); /* Opera 
    
    */
