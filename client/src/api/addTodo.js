import { baseApi } from './base';

export const addTodo = (options) => {
	return baseApi.post('createTodo', options).then((res) => res.data);
};
