import { Tag } from 'antd';
import React from 'react';

export const TableStatus = ({ status }) => {
	const color = status === 'resolved' ? 'green' : 'geekblue';
	return (
		<Tag className='table__status-tag'
			color={color}
			key={status}>
			{status.toUpperCase()}
		</Tag>
	);
};
