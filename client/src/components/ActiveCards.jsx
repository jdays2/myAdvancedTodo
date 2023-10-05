import React, { useEffect } from 'react';
import TodoCard from './TodoCard';
import { useDispatch, useSelector } from 'react-redux';
import { getList, selectedByStatus } from '../redux/slices/todosSlice';
import { Spin } from 'antd';

export default function ActiveCards() {
	const { active } = useSelector(selectedByStatus);
	const { isLoading } = useSelector((state) => state.todos);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getList());
	}, []);
	return (
		<>
			<Spin
				className="spinner"
				spinning={isLoading}
				size="large"
			/>
			{active.map((card) => {
				return (
					<TodoCard
						key={card._id}
						card={card}
					/>
				);
			})}
		</>
	);
}
