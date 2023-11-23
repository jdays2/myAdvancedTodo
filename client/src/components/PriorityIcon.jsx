import { Tooltip } from 'antd';
import React from 'react';
import {
	FcHighPriority,
	FcMediumPriority,
	FcLowPriority,
} from 'react-icons/fc';
import { MdWork } from 'react-icons/md';

export const PriorityIcon = ({ status }) => (
	<>
		{status === 'critical' ? (
			<Tooltip
				placement="top"
				title={`This is your high-priority task. It's recommended to tackle this task first.`}>
				<FcHighPriority className="icon" />
			</Tooltip>
		) : null}
		{status === 'urgent' ? (
			<Tooltip
				placement="top"
				title={`Task with medium priority. It's suggested to address this task after completing more urgent ones.`}>
				<FcMediumPriority className="icon" />
			</Tooltip>
		) : null}
		{status === 'standard' ? (
			<Tooltip
				placement="top"
				title={` This task has low priority. You can work on it in your free time.`}>
				<FcLowPriority className="icon" />{' '}
			</Tooltip>
		) : null}
	</>
);
