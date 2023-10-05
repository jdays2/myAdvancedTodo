import { baseApi } from './base';

export const editTodos = ({ id, data }) => {
	return baseApi.put(`editTodo/${id}`, data).then((res) => res.data);
};
