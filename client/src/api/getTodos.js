import { baseApi } from './base';

export const getTodos = (options) => {
	return baseApi.get('getTodos', options).then((res) => res.data);
};
