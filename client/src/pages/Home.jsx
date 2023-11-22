import React, { useState } from 'react';
import { Radio, Space, Typography, Flex, Dropdown, Select } from 'antd';
import { Outlet } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { DownOutlined } from '@ant-design/icons';
import { useSelector } from 'react-redux';
const { Title } = Typography;

export default function Home() {
	const [size, setSize] = useState('');
	const [sortBy, setSortBy] = useState('');
	const navigate = useNavigate();

	const handleViewChange = (e) => {
		const value = e.target.value;
		setSize(value);
		navigate(`/${value}`);
	};

	const handleFilterBy = (value) => {
		setSortBy(value);
	};

	return (
		<>
			<Flex
				justify="space-between"
				style={{
					marginTop: '10px',
					paddingBottom: '10px',
					borderBottom: '1px solid #f0f0f0',
				}}>
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
						onChange={handleViewChange}>
						<Radio.Button value="">Calendar</Radio.Button>
						<Radio.Button value="table">Table</Radio.Button>
					</Radio.Group>
				</Flex>

				<Space>
					<Select
						defaultValue={sortBy}
						style={{ width: 120 }}
						onChange={handleFilterBy}
						options={[
							{ value: '', label: <span>All</span> },
							{ value: 'active', label: <span>Active</span> },
							{ value: 'resolved', label: <span>Resolved</span> },
						]}
					/>
				</Space>
			</Flex>

			<Outlet context={[sortBy]} />
		</>
	);
}
