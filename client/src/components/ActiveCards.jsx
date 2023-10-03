import React from 'react';
import TodoCard from './TodoCard';

function ActiveCards() {
	return (
		<>
			<TodoCard />
			<TodoCard />
			<TodoCard />
			<TodoCard />
			<TodoCard />
			<TodoCard />
		</>
	);
}

const loader = () => {
	return null;
};

export const activeCardsRout = {
	loader,
	ActiveCards,
};
