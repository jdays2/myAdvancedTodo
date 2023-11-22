export const calculateDeadlineStatus = (deadline) => {
	const currentDate = new Date();
	const deadlineDateObj = new Date(deadline);

	if (currentDate.getTime() > deadlineDateObj.getTime()) {
		debugger;
		return true;
	}

	const timeDiff = deadlineDateObj.getTime() - currentDate.getTime();

	const oneHour = 60 * 60 * 1000;
	const oneDay = 24 * 60 * 60 * 1000;
	const oneWeek = 7 * oneDay;
	const oneMonth = 30 * oneDay; // Примечание: Это грубая оценка, месяц может содержать разное количество дней

	// Вычисляем оставшееся количество дней, недель и месяцев
	const remainingHours = Math.floor(timeDiff / oneHour);
	const remainingDays = Math.floor(timeDiff / oneDay);
	const remainingWeeks = Math.floor(timeDiff / oneWeek);
	const remainingMonths = Math.floor(timeDiff / oneMonth);

	// Определяем, что возвращать в зависимости от времени до дедлайна
	if (remainingMonths > 0) {
		return `${remainingMonths} ${remainingMonths === 1 ? 'month' : 'months'}`;
	} else if (remainingWeeks > 0) {
		return `${remainingWeeks} ${remainingWeeks === 1 ? 'week' : 'weeks'}`;
	} else if (remainingDays > 0) {
		return `${remainingDays} ${remainingDays === 1 ? 'day' : 'days'}`;
	} else {
		return `${remainingHours} ${remainingHours === 1 ? 'hour' : 'hours'}`;
	}
};
