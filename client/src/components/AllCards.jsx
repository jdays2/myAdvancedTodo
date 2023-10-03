import React from 'react';
import TodoCard from './TodoCard';
import { getTodos } from '../api/getTodos';
import { useLoaderData } from 'react-router-dom';
import { Empty } from 'antd';

function AllCards() {
	const cards = useLoaderData();

	return (
		<>
			{cards ? (
				cards.map((card) => {
					return (
						<TodoCard
							key={card._id}
							card={card}
						/>
					);
				})
			) : (
				<Empty className="empty" />
			)}
		</>
	);
}

const loader = async ({ request: { signal } }) => {
	const cards = await getTodos({ signal });
	console.log(cards)
	return cards;
};

export const allCardsRout = {
	loader,
	element: <AllCards />,
};
