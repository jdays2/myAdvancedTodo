import React, { useState } from 'react';
import { Radio, Space, Typography, Flex } from 'antd';
import { Outlet } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const { Title } = Typography;

export default function Home() {
	const [size, setSize] = useState('/');
	const [sortBy, setSortBy] = useState('');
	const navigate = useNavigate();

	const handleSizeChange = (e) => {
		const value = e.target.value;
		setSize(value);
		navigate(`/${value}`);
	};

	const handleSortBy = (e) => {
		const value = e.target.value;
		setSortBy(value);
	};

	return (
		<>
			<Flex
				justify="space-between"
				style={{ marginTop: '10px' }}>
				<Flex
					align="center"
					gap={10}>
					<Title
						level={4}
						style={{ marginBottom: '5px' }}>
						View:
					</Title>

					<Radio.Group
						value={size}
						onChange={handleSizeChange}>
						<Radio.Button value="">Board</Radio.Button>
						<Radio.Button value="list">List</Radio.Button>
						<Radio.Button value="calendar">Calendar</Radio.Button>
					</Radio.Group>
				</Flex>

				<Space>
					<Title
						level={5}
						style={{ marginBottom: '5px' }}>
						Sorted By:
					</Title>

					<Radio.Group
						value={sortBy}
						onChange={handleSortBy}>
						<Radio.Button value="">All</Radio.Button>
						<Radio.Button value="active">Active</Radio.Button>
						<Radio.Button value="resolved">Resolved</Radio.Button>
					</Radio.Group>
				</Space>
			</Flex>

			<Outlet context={[sortBy]} />
		</>
	);
}
