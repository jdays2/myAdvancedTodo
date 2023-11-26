import React from 'react';

import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import NavBars from './components/NavBars';
import { CalendarBig } from './components/Calendar';
import { TableBlock } from './components/Table';
import { Board } from './components/Board';
import { NotFound } from './pages/NotFound';


const router = createBrowserRouter([
	{
		element: <NavBars />,
		children: [
			{
				path: '/',
				element: <Home />,
				children: [
					{
						path: '',
						element: <CalendarBig />,
					},
					{ path: 'board/:date', element: <Board /> },
					{ path: 'table', element: <TableBlock /> },
					{ path: '*', element: <NotFound /> },
				],
			},
		],
	},
]);

export default router;
