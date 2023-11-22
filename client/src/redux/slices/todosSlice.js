import {
	createAsyncThunk,
	createSelector,
	createSlice,
} from '@reduxjs/toolkit';
import { getTodos } from '../../api/getTodos';
import { editTodos } from '../../api/editTodos';
import { deleteTodo } from '../../api/deleteTodo';
import { addTodo } from '../../api/addTodo';

export const getList = createAsyncThunk('todos/getList', async () => {
	const response = await getTodos();
	return response;
});

export const editList = createAsyncThunk('todos/editTodo', async (data) => {
	const response = await editTodos(data);
	return response;
});

export const deleteTodos = createAsyncThunk('todos/deleteTodo', async (id) => {
	const response = await deleteTodo(id);
	return response;
});

export const addTodos = createAsyncThunk('todos/addTodo', async (data) => {
	const response = await addTodo(data);
	return response;
});

const initialState = {
	list: [],
	isCreating: false,
	isLoading: false,
	isCreatingDone: '',
	isEditingDone: '',
	activeTodoId: {},
};

export const todosSlice = createSlice({
	name: 'todos',
	initialState,
	reducers: {
		resetCreating: (state) => {
			state.isCreatingDone = '';
		},
		resetEditing: (state) => {
			state.isEditingDone = '';
		},
		setActiveTodoId: (state, action) => {
			state.activeTodoId = action.payload;
		},
	},

	extraReducers: (builder) => {
		builder.addCase(getList.fulfilled, (state, action) => {
			state.list = action.payload;
			state.isLoading = false;
		});
		builder.addCase(getList.pending, (state) => {
			state.isLoading = true;
		});
		builder.addCase(editList.fulfilled, (state, action) => {
			state.isEditingDone = 'fulfilled';

			const desiredId = action.payload._id;
			const newData = action.payload;

			state.list = state.list.map((item) => {
				if (item._id === desiredId) {
					return newData;
				}
				return item;
			});
		});
		builder.addCase(editList.pending, (state) => {
			state.isEditingDone = 'pending';
		});
		builder.addCase(editList.rejected, (state) => {
			state.isEditingDone = 'rejected';
		});
		builder.addCase(deleteTodos.fulfilled, (state, action) => {
			const id = action.payload.id;
			state.list = state.list.map((item) => {
				if (item._id === id) {
					item.deleted = true;

					return item;
				}
				return item;
			});
		});
		builder.addCase(addTodos.rejected, (state) => {
			state.isCreatingDone = 'rejected';
		});
		builder.addCase(addTodos.fulfilled, (state, action) => {
			state.isCreatingDone = 'fulfilled';
			const newTodo = action.payload;
			state.list.push(newTodo);
		});
	},
});

export const selectedByStatus = createSelector(
	(state) => state.todos.list,
	(list) => {
		const active = list.filter((todo) => todo.status === 'active');
		const resolved = list.filter((todo) => todo.status === 'resolved');

		return { active, resolved };
	},
);

export const { resetCreating, resetEditing, setActiveTodoId } =
	todosSlice.actions;

export default todosSlice.reducer;
