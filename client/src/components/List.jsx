import React from 'react';
import { useSortedList } from '../hooks/useSortedList';
import { useOutletContext } from 'react-router-dom';
import { Spin, Typography, Tag, Table, Space, Flex, Button } from 'antd';
import { PriorityIcon } from './PriorityIcon';
import { TypeIcon } from './TypeIcon';
import { useDispatch } from 'react-redux';
import { setActiveTodoId } from '../redux/slices/todosSlice';
import { toggleModal } from '../redux/slices/modalsSlice';
const { Column, ColumnGroup } = Table;
const { Title } = Typography;

export const Listing = () => {
  const dispatch = useDispatch();
	const [sortBy] = useOutletContext();
	const { isLoading, sortedList } = useSortedList(sortBy);

	const setModalActive = (id, strModal, strStatus) => {
		dispatch(setActiveTodoId(id));
		dispatch(toggleModal({ modal: strModal, status: strStatus }));
	};

	return (
		<div className='table'>
			<Spin
				className="spinner"
				spinning={isLoading}
				size="large"
			/>

			{sortedList && (
				<Table dataSource={sortedList} size="medium">
					<Column align='left' width="190px"
						title="Title"
						dataIndex="title"
						key="firstName"
						render={(title) => <Title level={5}>{title}</Title>}
					/>
					<Column width="140px"
						title="Created"
						dataIndex="created"
						key="created"
					/>
					<Column width="140px"
						title="Deadline"
						dataIndex="deadline"
						key="deadline"
					/>
					<Column
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
						title="Body"
						dataIndex="body"
						key="body"
					/>
					<Column
						title="Type"
						dataIndex="type"
						key="type"
						render={(type) => (
							<Flex
								align="center"
								gap={6}>
								<TypeIcon status={type} />
								<p>{type}</p>
							</Flex>
						)}
					/>
					<Column
						title="Priority"
						dataIndex="priority"
						key="priority"
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
