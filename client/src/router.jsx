import React from 'react';

import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import NavBars from './components/NavBars';
import { allCardsRout } from './components/AllCards';
import { activeCardsRout } from './components/ActiveCards';
import { resolvedCardsRout } from './components/ResolvedCards';
import { deletedCardsRout } from './components/DeletedCards';

const router = createBrowserRouter([
	{
		element: <NavBars />,
		children: [
			{
				path: '/',
				element: <Home />,
				children: [
					{ ...allCardsRout },
					{ path: 'active', ...activeCardsRout },
					{ path: 'resolved', ...resolvedCardsRout },
					{ path: 'deleted', ...deletedCardsRout },
				],
			},
		],
	},
]);

export default router;
