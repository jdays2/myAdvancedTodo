import React from 'react';

import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import NavBars from './components/NavBars';
import { Calender } from './components/Calender';
import { Listing } from './components/List';
import { Board } from './components/Board';

const router = createBrowserRouter([
	{
		element: <NavBars />,
		children: [
			{
				path: '/',
				element: <Home />,
				children: [
					{ path: '/', element: <Board /> },
					{ path: '/list', element: <Listing /> },
					{ path: '/calendar', element: <Calender /> },
				],
			},
		],
	},
]);

export default router;
