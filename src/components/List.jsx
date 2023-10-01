import React from 'react';
import TodoCard from '../components/TodoCard';

export default function List() {
	return (
		<div className="list__item">
			<TodoCard />
			<TodoCard />
			<TodoCard />
		</div>
	);
}
