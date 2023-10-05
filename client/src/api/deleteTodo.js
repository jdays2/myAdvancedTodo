import { baseApi } from './base';

export const deleteTodo = (id) => {
	return baseApi.delete(`/deleteTodo/${id}`).then((res) => res.data);
};
