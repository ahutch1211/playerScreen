import React from 'react';
import styled from 'styled-components';

import Map from 'components/map/index';

const Header = styled.header`
	vertical-align: middle;
	font-wight: bold;
`;

export default ({ data }) => {
	const { title } = data;

	return (
		<Header title={title}>
			<Map />
		</Header>
	);
};
