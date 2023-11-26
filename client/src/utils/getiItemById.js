export const selectCardById = (state, activeId) => {
	return state.todos.list.find((item) => item._id === activeId);
};
