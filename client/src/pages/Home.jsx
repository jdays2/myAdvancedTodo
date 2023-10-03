import React from 'react';
import ActiveCards from '../components/ActiveCards';
import DeletedCards from '../components/DeletedCards';
import ResolvedCards from '../components/ResolvedCards';
import AllCards from '../components/AllCards';

import { Tabs } from 'antd';

const items = [
	{
		key: '1',
		label: 'All',
		children: <AllCards />,
	},
	{
		key: '2',
		label: 'Active',
		children: <ActiveCards />,
	},
	{
		key: '3',
		label: 'Resolved',
		children: <ResolvedCards />,
	},
	{
		key: '4',
		label: 'Deleted',
		children: <DeletedCards />,
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
			</div>
		</section>
	);
}
