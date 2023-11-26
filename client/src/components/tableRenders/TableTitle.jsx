import { Flex, Space } from 'antd';
import React from 'react';
const { Title } = Typography;
import { Typography, Tooltip } from 'antd';
import { calculateDeadlineStatus } from '../../utils/calculateDeadlineStatus';
import { FaGripfire } from 'react-icons/fa';

export const TableTitle = ({ title, record }) => {
	const deadlineChecker = calculateDeadlineStatus(record.deadline);

	const isExpired = deadlineChecker.isExpired && record.status !== 'resolved';

	return (
		<Flex
			gap={4}
			align="center"
			className="table__title">
			{isExpired && (
				<Tooltip
					placement="top"
					title={`Red alert! You have an overdue task. Time to act!`}>
					<FaGripfire className="icon__fire" />
				</Tooltip>
			)}
			<Title level={5}>{title}</Title>
		</Flex>
	);
};
