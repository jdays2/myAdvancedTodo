import { Tooltip } from 'antd';
import React from 'react';

import { MdWork } from 'react-icons/md';
import { PiPersonArmsSpreadFill } from 'react-icons/pi';

export const TypeIcon = ({ type }) => (
	<>
		{type === 'Work' ? (
			<Tooltip
				placement="top"
				title={`This is a work-related task. Focus on business matters and professional responsibilities.`}>
				<MdWork className="icon" />
			</Tooltip>
		) : (
			<Tooltip
				placement="top"
				title={`A personal task for you. Attend to matters related to your personal life and well-being.`}>
				
				<PiPersonArmsSpreadFill className="icon" />
			</Tooltip>
		)}
	</>
);
