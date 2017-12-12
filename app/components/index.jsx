import React from 'react';
import styled from 'styled-components';

const Header = styled.header`
	vertical-align: middle;
	font-wight: bold;
`;

export default ({ data }) => {
	const { title = 'missing title' } = data;

	return (
		<Header>
			<h1>{title}</h1>
		</Header>
	);
};
