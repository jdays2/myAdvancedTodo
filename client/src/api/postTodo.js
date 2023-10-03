import { baseApi } from './base';

export const postTodos = (options) => {
	return baseApi.post('createTodo', options).then((res) => res.data);
};
