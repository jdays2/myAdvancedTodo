import React from 'react';
import TodoCard from './TodoCard';
import { Empty } from 'antd';

function DeletedCards() {
	return (
		<>
			<Empty className='empty'/>
		</>
	);
}

const loader = () => {
	return null
};

export const deletedCardsRout = {
	loader,
	DeletedCards
}