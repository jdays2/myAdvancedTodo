import { Calendar, Spin } from 'antd';
import React, { useEffect } from 'react';
import { BackBtn } from './BackBtn';
import { useDispatch, useSelector } from 'react-redux';
import { getList, setActiveTodoId } from '../redux/slices/todosSlice';
import { PriorityIcon } from './PriorityIcon';
import { TypeIcon } from './TypeIcon';
import { toggleModal } from '../redux/slices/modalsSlice';

export const Calender = () => {
	const { list, isLoading } = useSelector((state) => state.todos);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getList());
	}, []);

	const eventsMap = {};

	list.forEach((todo) => {
		if (todo.status !== 'active') {
			return;
		}
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
					<li onClick={()=>{
            setActiveTodoIdHandler(event._id);
            setModalActive('details','true')
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
		<div className='calendar'>
			<BackBtn />
			<Spin
				className="spinner"
				spinning={isLoading}
				size="large"
			/>
			{!isLoading && <Calendar mode="month" dateCellRender={dateCell} />}
		</div>
	);
};
