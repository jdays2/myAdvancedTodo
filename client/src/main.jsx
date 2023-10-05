import React from 'react';
import ReactDOM from 'react-dom/client';
import router from './router.jsx';
import { RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';

import { store } from './redux/store.js';
import './styles/styles.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
	<Provider store={store}>
		<RouterProvider router={router} />
	</Provider>,
);
