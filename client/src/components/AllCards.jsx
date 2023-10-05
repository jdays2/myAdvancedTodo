import React, { useEffect } from 'react';
import TodoCard from './TodoCard';
import { Empty, Spin } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { getList } from '../redux/slices/todosSlice';

export default function AllCards() {
	const { list, isLoading } = useSelector((state) => state.todos);

	const dispatch = useDispatch();

	useEffect(()=>{
		dispatch(getList());
	}, [])
	return (
		<>
			<Spin
				className="spinner"
				spinning={isLoading}
				size="large"
			/>
			{list ? (
				list.map((card) => {
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
