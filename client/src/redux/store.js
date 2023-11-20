import { configureStore } from '@reduxjs/toolkit';

import todosReducer from './slices/todosSlice';
import modalsReducer from './slices/modalsSlice';

export const store = configureStore({
	reducer: {
		todos: todosReducer,
		modals: modalsReducer
	},
});
