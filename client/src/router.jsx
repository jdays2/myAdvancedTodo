import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import NavBars from './components/NavBars';

const router = createBrowserRouter([
	{
		element: <NavBars />,
		children: [
			{
				path: '/',
				element: <Home />,
			},
		],
	},
]);

export default router;
