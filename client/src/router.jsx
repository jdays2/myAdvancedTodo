import React from 'react';

import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import NavBars from './components/NavBars';
import AllCards from './components/AllCards';
import ActiveCards from './components/ActiveCards';
import ResolvedCards from './components/ResolvedCards';

const router = createBrowserRouter([
	{
		element: <NavBars />,
		children: [
			{
				path: '/',
				element: <Home />,
				children: [
					{ index: true, element: <AllCards />},
					{ path: 'active', element: <ActiveCards /> },
					{ path: 'resolved', element: <ResolvedCards /> },
				],
			},
		],
	},
]);

export default router;
