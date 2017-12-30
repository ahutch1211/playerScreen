import React from 'react';
import styled from 'styled-components';

const Tab = styled.div`
	width: 1.15em;
	height: 1.15em;
	background-color: white;
	margin: 1em 0;
	border: 1px solid black;
	border-radius: 0 10px 10px 0;
	box-shadow: inset 0px 0px 3px 0px black, 3px 3px 5px black;
	overflow: hidden;
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
		<Tab height>
			<Label>Character</Label>
		</Tab>
		<Tab>
			<Label>Skills</Label>
		</Tab>
		<Tab>
			<Label>Inventory</Label>
		</Tab>
	</Navigation>
);

/*

	-ms-transform: rotate(90deg); /* IE 9 
	-moz-transform: rotate(90deg); /* Firefox 
	-webkit-transform: rotate(90deg); /* Safari and Chrome 
    -o-transform: rotate(90deg); /* Opera 
    
    */
