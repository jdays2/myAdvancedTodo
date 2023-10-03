import React from 'react';
import TodoCard from './TodoCard';

function ResolvedCards() {
	return (
		<>
		<TodoCard />
		<TodoCard />
		<TodoCard />
	</>
	);
}

const loader = () => {
	return null
};

export const resolvedCardsRout = {
	loader,
	ResolvedCards
}