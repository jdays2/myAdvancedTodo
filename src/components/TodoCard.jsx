import React, { useState } from 'react';
import { Card, Space, Select, Dropdown, Drawer } from 'antd';
import { MoreOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const items = [
	{
		key: '1',
		label: <button>Edit</button>,
	},
	{
		key: '2',
		danger: true,
		label: <button>Remove</button>,
	},
];

export default function TodoCard() {
	const [open, setOpen] = useState(false);

	const showDrawer = (e) => {
		if (!e.target.classList.contains('card__link')) {
			setOpen(true);
		}
	};
	const onClose = () => {
		setOpen(false);
	};

	return (
		<>
			<Card
				onClick={showDrawer}
				headStyle={{ borderBottom: 'none' }}
				bodyStyle={{ padding: 0, cursor: 'pointer' }}
				hoverable
				style={{
					width: '40rem',
					background: '#fff',
					border: '0.1rem solid #0000001a',
					borderRadius: '0.8rem',
					boxShadow: '0 0.2rem 0.8rem #0000000a, 0 0.4rem 2.4rem #0000000a',
					color: '#262525',
					cursor: 'default',
					padding: '1.2rem',
				}}>
				<div className="card__content">
					<p className="card__date">01.10.23 03:24</p>
					<p className="card__title">Hello</p>
					<Select
						defaultValue="active"
						style={{
							width: '12rem',
							height: '3rem',
							padding: '0.1rem',
							// backgroundColor: "#ffdb4d4d",
							backgroundColor: '#3bc9351a',
							color: '#07a300',
							borderRadius: '1rem',
						}}
						bordered={false}
						options={[
							{
								value: 'active',
								label: 'active',
							},
							{
								value: 'resolved',
								label: 'resolved',
							},
						]}
					/>

					<Dropdown
						menu={{
							items,
						}}
						placement="bottom">
						<p className="card__link">
							<MoreOutlined />
						</p>
					</Dropdown>
				</div>
			</Card>
			{/* <Drawer
				title="Edit"
				placement="right"
				onClose={onClose}
				open={open}>
				<p>Some contents...</p>
				<p>Some contents...</p>
				<p>Some contents...</p>
			</Drawer> */}
		</>
	);
}
