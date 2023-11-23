export const filterByDay = (list, date) => {
	return list.filter((item) => item.created === date);
};
