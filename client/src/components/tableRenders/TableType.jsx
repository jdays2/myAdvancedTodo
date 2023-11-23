import { Flex } from 'antd';
import React from 'react';
import { TypeIcon } from '../TypeIcon';

export const TableType = ({ type }) => {
	return (
		<Flex
			align="center"
			gap={6}>
			<TypeIcon type={type} />
			<p>{type}</p>
		</Flex>
	);
};
