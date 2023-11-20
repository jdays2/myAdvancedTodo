import React from 'react';
import { Button, Space, Tabs } from 'antd';
import { Link, Outlet } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function Home() {
	const navigate = useNavigate();

	const navigateHandler = (textLink = '') => {
		navigate(`/${textLink}`);
	};

	const items = [
		{
			key: '1',
			label: (
				<span
					onClick={() => {
						navigateHandler();
					}}>
					All
				</span>
			),
		},
		{
			key: '2',
			label: (
				<span
					onClick={() => {
						navigateHandler('active');
					}}>
					Active
				</span>
			),
		},
		{
			key: '3',
			label: (
				<span
					onClick={() => {
						navigateHandler('resolved');
					}}>
					Resolved
				</span>
			),
		},
	];

	const OperationsSlot = {
		left: <h5>Sorted by:</h5>,
		right: (
			<Button
				className="tabs-extra-demo-button"
				onClick={() => {
					navigateHandler('calendar');
				}}>
				Calendar
			</Button>
		),
	};

	return (
		<>
			<section className="container">
				<div className="">
					<Tabs
						tabBarExtraContent={OperationsSlot.right}
						items={items}
					/>

					<div className="list">
						<Outlet />
					</div>
				</div>
			</section>
		</>
	);
}
