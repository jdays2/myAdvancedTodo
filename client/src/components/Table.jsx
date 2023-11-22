import React, { useState } from 'react';
import { useSortedList } from '../hooks/useSortedList';
import { useOutletContext } from 'react-router-dom';
import { FaInfoCircle } from 'react-icons/fa';
import {
	Spin,
	Typography,
	Tag,
	Table,
	Space,
	Flex,
	Button,
	Tooltip,
	Col,
	Popover,
} from 'antd';
import { PriorityIcon } from './PriorityIcon';
import { TypeIcon } from './TypeIcon';
import { useDispatch } from 'react-redux';
import { setActiveTodoId } from '../redux/slices/todosSlice';
import { toggleModal } from '../redux/slices/modalsSlice';
import { RiQuestionFill } from 'react-icons/ri';
import { calculateDeadlineStatus } from '../utils/calculateDeadlineStatus';
const { Column } = Table;
const { Title } = Typography;

export const TableBlock = () => {
	const dispatch = useDispatch();
	const [sortBy] = useOutletContext();
	const { isLoading, sortedList } = useSortedList(sortBy);

	const [filters, setFilters] = useState({});

	const handleTableChange = (pagination, filters, sorter) => {
		setFilters(filters);
	};

	const setModalActive = (id, strModal, strStatus) => {
		dispatch(setActiveTodoId(id));
		dispatch(toggleModal({ modal: strModal, status: strStatus }));
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
				<Table
					dataSource={sortedList}
					size="medium">
					<Column
						align="left"
						width="190px"
						title="Title"
						dataIndex="title"
						key="firstName"
						render={(title) => <Title level={5}>{title}</Title>}
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
							const deadlineChecker = calculateDeadlineStatus(record.deadline);
							return (
								(value === 'overdue' && deadlineChecker === true) ||
								(value !== 'overdue' && deadlineChecker !== true)
							);
						}}
						render={(_, record) => {
							const { created, deadline } = record;
							const deadlineChecker = calculateDeadlineStatus(deadline);
							const isOkey = deadlineChecker === true ? 'red' : 'orange';
							return (
								<Flex
									align="center"
									diraction="column">
									<Tag
										color={isOkey}
										key={deadline}>
										{deadlineChecker === true
											? 'EXPIRED'
											: deadlineChecker.toUpperCase()}
									</Tag>
									<Popover
										placement="right"
										content={
											<Flex vertical="false">
												<Col
													span={24}
													className="card-detail__col">
													<strong className="card-detail__col-title">
														Created:
													</strong>
													<span className="card-detail__col-vlaue">
														{created}
													</span>
												</Col>
												<Col
													span={24}
													className="card-detail__col">
													<strong className="card-detail__col-title">
														Deadline:
													</strong>
													<span className="card-detail__col-vlaue">
														{deadline}
													</span>
												</Col>
											</Flex>
										}
										arrow={false}>
										<FaInfoCircle className="table__info" />
									</Popover>
								</Flex>
							);
						}}
					/>
					<Column
						width="100px"
						title="Status"
						dataIndex="status"
						key="status"
						render={(status) => {
							const color = status === 'resolved' ? 'green' : 'geekblue';
							return (
								<Tag
									color={color}
									key={status}>
									{status.toUpperCase()}
								</Tag>
							);
						}}
					/>
					<Column
						width="460px"
						title="Body"
						dataIndex="body"
						key="body"
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
						render={(type, record) => {
							return (
								<Flex
									align="center"
									gap={6}>
									<TypeIcon status={type} />
									<p>{type}</p>
								</Flex>
							);
						}}
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
						render={(priority) => (
							<Flex
								align="center"
								gap={6}>
								<PriorityIcon status={priority} />
								<p>{priority}</p>
							</Flex>
						)}
					/>
					<Column
						width="60px"
						title="Action"
						key="action"
						dataIndex="_id"
						render={(id, record) => (
							<Space
								size="middle"
								onClick={() => {
									setModalActive(id, 'edit', 'true');
								}}>
								<Button type="default">Edit</Button>
							</Space>
						)}
					/>
				</Table>
			)}
		</div>
	);
};
