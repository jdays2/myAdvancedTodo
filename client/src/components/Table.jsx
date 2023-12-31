import React, { useState } from 'react';
import { useSortedList } from '../hooks/useSortedList';

import { Spin, Typography, Table, Space, Tooltip } from 'antd';
import { RiQuestionFill } from 'react-icons/ri';
import { calculateDeadlineStatus } from '../utils/calculateDeadlineStatus';
import { TableStatus } from './tableRenders/TableStatus';
import { TableType } from './tableRenders/TableType';
import { TablePriority } from './tableRenders/TablePriority';
import { TableActions } from './tableRenders/TableActions';
import { TableDeadline } from './tableRenders/TableDeadline';
import { TableTitle } from './tableRenders/TableTitle';
import useTitle from '../hooks/useTitle';
import { TableBody } from './tableRenders/TableBody';
import { CgScrollH } from 'react-icons/cg';
const { Column } = Table;
const { Title } = Typography;

export const TableBlock = () => {
	const sortBy = '';
	const { isLoading, sortedList } = useSortedList(sortBy);

	const [filters, setFilters] = useState({});

	useTitle(`Table`);

	const handleTableChange = (filters) => {
		setFilters(filters);
	};

	return (
		<div className="table">
			<Space style={{ marginBottom: '20px' }}>
				<Title
					level={3}
					style={{ marginTop: '20px' }}
					onChange={handleTableChange}>
					Table
				</Title>

				<Tooltip
					placement="rightTop"
					title={`Welcome to your Todo Tasks table! Here, you can view, sort, and modify your tasks to stay organized and productive.
					`}>
					<RiQuestionFill className="question-mark" />
				</Tooltip>
			</Space>
			<Spin
				className="spinner"
				spinning={isLoading}
				size="large"
			/>

			{sortedList && (
				<>
					<div className="table__scroll">
						<CgScrollH />
					</div>
					<Table
						dataSource={sortedList}
						size="small"
						pagination={{
							pageSize: 11,
						}}
						bordered>
						<Column
							align="left"
							width="250px"
							title="Title"
							dataIndex="title"
							key="firstName"
							render={(title, record) => (
								<TableTitle
									title={title}
									record={record}
								/>
							)}
						/>
						<Column
							width="140px"
							title="Deadline"
							dataIndex="deadline"
							key="deadline"
							filters={[
								{ text: 'EXPIRED', value: 'overdue' },
								{ text: 'Active', value: 'not_overdue' },
							]}
							onFilter={(value, record) => {
								const deadlineChecker = calculateDeadlineStatus(
									record.deadline,
								);
								return (
									(value === 'overdue' && deadlineChecker.isExpired === true) ||
									(value !== 'overdue' && deadlineChecker.isExpired !== true)
								);
							}}
							sorter={(a, b) => {
								const deadlineCheckerA = calculateDeadlineStatus(a.deadline);
								const deadlineCheckerB = calculateDeadlineStatus(b.deadline);

								if (deadlineCheckerA.isExpired && !deadlineCheckerB.isExpired) {
									// If a is expired but b is not, place a at the bottom
									return 1;
								} else if (
									!deadlineCheckerA.isExpired &&
									deadlineCheckerB.isExpired
								) {
									// If b is expired but a is not, place b at the bottom
									return -1;
								} else {
									// If both are expired or not expired, sort based on the deadline
									return deadlineCheckerA.timeDiff - deadlineCheckerB.timeDiff;
								}
							}}
							render={(_, record) => <TableDeadline record={record} />}
						/>
						<Column
							width="100px"
							title="Status"
							dataIndex="status"
							key="status"
							filters={[
								{ text: 'Resolved', value: 'resolved' },
								{ text: 'Active', value: 'active' },
							]}
							onFilter={(value, record) => record.status === value}
							render={(status, record) => (
								<TableStatus
									status={status}
									card={record}
								/>
							)}
						/>
						<Column
							
							title="Body"
							dataIndex="body"
							key="body"
							responsive={['xxl']}
							render={(body) => <TableBody body={body} />}
						/>
						<Column
							title="Type"
							dataIndex="type"
							key="type"
							filters={[
								{ text: 'Personal', value: 'Personal' },
								{ text: 'Work', value: 'Work' },
							]}
							onFilter={(value, record) => record.type === value}
							render={(type) => <TableType type={type} />}
							responsive={['xl']}
						/>
						<Column
							title="Priority"
							dataIndex="priority"
							key="priority"
							filters={[
								{ text: 'critical', value: 'critical' },
								{ text: 'urgent', value: 'urgent' },
								{ text: 'standard', value: 'standard' },
							]}
							onFilter={(value, record) => record.priority === value}
							render={(priority) => <TablePriority priority={priority} />}
							responsive={['xl']}
						/>
						<Column
							width="60px"
							title="Action"
							key="action"
							dataIndex="_id"
							render={(id, record) => <TableActions id={id} />}
						/>
					</Table>
				</>
			)}
		</div>
	);
};
