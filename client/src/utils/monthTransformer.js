export const monthTransformer = (date) => {
	const numberMonth = date.getMonth();
	const year = date.getFullYear()

	const months = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December',
	];

	if (numberMonth >= 0 && numberMonth <= months.length) {
		return { month: months[numberMonth], year };
	}
};
