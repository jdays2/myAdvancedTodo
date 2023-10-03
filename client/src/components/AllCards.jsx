import React from 'react';
import TodoCard from './TodoCard';

function AllCards() {
	return (
		<>
			<TodoCard />
			<TodoCard />
			<TodoCard />
			<TodoCard />
			<TodoCard />
			<TodoCard />
			<TodoCard />
			<TodoCard />
			<TodoCard />
			<TodoCard />
			<TodoCard />
			<TodoCard />
			<TodoCard />
			<TodoCard />
			<TodoCard />
			<TodoCard />
			<TodoCard />
			<TodoCard />
			<TodoCard />
			<TodoCard />
			<TodoCard />
			<TodoCard />
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
	return null
};

export const allCardsRout = {
	loader,
	AllCards,
};
