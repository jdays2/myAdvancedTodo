import React from 'react';
import { Tabs } from 'antd';
import { Link, Outlet } from 'react-router-dom';
const items = [
	{
		key: '1',
		label: <Link to="/">All</Link>,
	},
	{
		key: '2',
		label: <Link to="active">Active</Link>,
	},
	{
		key: '3',
		label: <Link to="resolved">Resolved</Link>,
	},
	{
		key: '4',
		label: <Link to="deleted">Deleted</Link>,
	},
];

export default function Home() {
	return (
		<section className="container">
			<div className="">
				<Tabs
					defaultActiveKey="1"
					items={items}
					indicatorSize={(origin) => origin - 16}
				/>
				<div className="list">
					<Outlet />
				</div>
			</div>
		</section>
	);
}
