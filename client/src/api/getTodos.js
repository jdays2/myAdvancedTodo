import { baseApi } from './base';

export const getTodos = () => {
	return baseApi.get('getTodos').then((res) => res.data);
};
