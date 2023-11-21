export const sorter = (list, string) => {
	switch (string) {
		case '':
			return list;
			break;
		case 'active':
			return list.filter((item) => item.status === 'active');
			break;
		case 'resolved':
			return list.filter((item) => item.status === 'resolved');
			break;
		default:
			break;
	}
};
