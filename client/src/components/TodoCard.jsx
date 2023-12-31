import React from 'react';
import { Card, Select, Dropdown, Button, Tooltip } from 'antd';

import { MoreOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { FaGripfire } from 'react-icons/fa6';
import { deleteTodos, editList } from '../redux/slices/todosSlice';
import { PriorityIcon } from './ui/PriorityIcon';
import { TypeIcon } from './ui/TypeIcon';
import { setActiveTodoId } from '../redux/slices/todosSlice';
import { toggleModal } from '../redux/slices/modalsSlice';
import { selectStatusItems } from '../utils/selectFields';
import { calculateDeadlineStatus } from '../utils/calculateDeadlineStatus';

export default function TodoCard({ card }) {
	const dispatch = useDispatch();

	const deleted = card.deleted;

	const deadlineChecker = calculateDeadlineStatus(card.deadline);
	
	const isExpiredClass =
		deadlineChecker.isExpired && card.status !== 'resolved'
			? 'card--expired'
			: '';
	const isExpired = deadlineChecker.isExpired && card.status !== 'resolved';

	const setDeleted = () => {
		const id = card._id;
		dispatch(deleteTodos(id));
	};

	const editStatus = (value) => {
		const updatedCard = { ...card, status: value };
		dispatch(editList({ id: card._id, data: updatedCard }));
	};

	const setModalActive = (strModal, strStatus) => {
		dispatch(toggleModal({ modal: strModal, status: strStatus }));
	};

	const setActiveTodoIdHandler = (id) => {
		dispatch(setActiveTodoId(id));
	};

	const selectActiveClass =
		card.status !== 'resolved'
			? 'card__select--active'
			: 'card__select--resolved';

	const cardDeleted = deleted ? 'card--deleted' : '';

	const items = [
		{
			key: '1',
			label: (
				<button
					onClick={() => {
						setActiveTodoIdHandler(card._id);
						setModalActive('edit', 'true');
					}}>
					Edit
				</button>
			),
		},
		{
			key: '2',
			danger: true,
			label: <button onClick={setDeleted}>Remove</button>,
		},
	];

	return (
		<>
			<Card
				hoverable={deleted ? false : true}
				className={`card ${cardDeleted} ${isExpiredClass}`}>
				<div className="card__content">
					<div className="card__head">
						<div className="card__head-box">
							<p className="card__date">{card.created}</p>

							{isExpired && (
								<Tooltip
									placement="top"
									title={`Red alert! You have an overdue task. Time to act!`}>
									<FaGripfire className="icon__fire" />
								</Tooltip>
							)}

							<PriorityIcon status={card.priority} />

							<TypeIcon type={card.type} />
						</div>
						{deleted ? null : (
							<Dropdown
								menu={{ items }}
								placement="bottom">
								<p className="card__link">
									<MoreOutlined />
								</p>
							</Dropdown>
						)}
					</div>
					<p className="card__title">{card.title}</p>
					{deleted ? (
						<span className="card__status">DELETED</span>
					) : (
						<div className="card__info">
							<Select
								value={card.status}
								className={`card__select ${selectActiveClass}`}
								bordered={false}
								onChange={editStatus}
								options={selectStatusItems}
							/>

							<Button
								type='dashed'
								className="card__more-link"
								onClick={() => {
									setActiveTodoIdHandler(card._id);
									setModalActive('details', 'true');
								}}>
								<span>More</span>
							</Button>
						</div>
					)}
				</div>
			</Card>
		</>
	);
}
