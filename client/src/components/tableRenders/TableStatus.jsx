import { Select, Tag } from 'antd';
import React from 'react';
import { selectStatusItems } from '../../utils/selectFields';
import { editList } from '../../redux/slices/todosSlice';
import { useDispatch } from 'react-redux';

export const TableStatus = ({ status, card }) => {
	const dispatch = useDispatch();

	const editStatus = (value) => {
		const updatedCard = { ...card, status: value };
		dispatch(editList({ id: card._id, data: updatedCard }));
	};

	const selectActiveClass =
		card.status !== 'resolved'
			? 'card__select--active'
			: 'card__select--resolved';

	return (

		<Select
			value={status}
			className={`card__select ${selectActiveClass}`}
			bordered={false}
			onChange={editStatus}
			options={selectStatusItems}
		/>
	);
};
