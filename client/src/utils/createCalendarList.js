export const createCalendarList = (todoList) => {
	const eventsMap = {};

	todoList.forEach((todo) => {
		const date = todo.created.split('T')[0];
		if (!eventsMap[date]) {
			eventsMap[date] = [];
		}

		eventsMap[date].push({ ...todo });
	});

	return { eventsMap };
};
