import { Calendar, Spin } from 'antd';
import React, { useEffect } from 'react';
import { BackBtn } from './BackBtn';
import { useDispatch, useSelector } from 'react-redux';
import { getList, setActiveTodoId } from '../redux/slices/todosSlice';
import { PriorityIcon } from './PriorityIcon';
import { TypeIcon } from './TypeIcon';
import { toggleModal } from '../redux/slices/modalsSlice';
import { useOutletContext } from 'react-router-dom';
import { useSortedList } from '../hooks/useSortedList';

export const Calender = () => {
	const dispatch = useDispatch();
	const [sortBy] = useOutletContext();
	const { isLoading, sortedList } = useSortedList(sortBy);

	const eventsMap = {};

	sortedList.forEach((todo) => {
		const date = todo.deadline.split('T')[0];
		if (!eventsMap[date]) {
			eventsMap[date] = [];
		}

		eventsMap[date].push({ ...todo });
	});

	const setActiveTodoIdHandler = (id) => {
		dispatch(setActiveTodoId(id));
	};

	const setModalActive = (strModal, strStatus) => {
		dispatch(toggleModal({ modal: strModal, status: strStatus }));
	};

	const dateCell = (value) => {
		const date = value.format('YYYY-MM-DD');
		const events = eventsMap[date] || [];

		return (
			<ul className="calendar__list">
				{events.map((event, index) => (
					<li
						onClick={() => {
							setActiveTodoIdHandler(event._id);
							setModalActive('details', 'true');
						}}
						key={index}
						className="calendar__item">
						<PriorityIcon status={event.priority} />
						<TypeIcon type={event.type} />
						<strong>{event.title}</strong>
					</li>
				))}
			</ul>
		);
	};

	return (
		<div className="calendar">
			<Spin
				className="spinner"
				spinning={isLoading}
				size="large"
			/>
			{!isLoading && (
				<Calendar
					mode="month"
					cellRender={dateCell}
				/>
			)}
		</div>
	);
};
