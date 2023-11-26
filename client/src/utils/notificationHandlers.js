export const editing = (editApi, type, message, fnc) => {
	editApi[type]({
		message,
		duration: 2,
		placement: 'bottomLeft',
		onClose: fnc,
	});
};

export const creating = (createApi, type, message, fnc) => {
	createApi[type]({
		message,
		duration: 2,
		placement: 'topLeft',
		onClose: fnc,
	});
};
