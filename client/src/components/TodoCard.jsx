import EditCard from './EditCard';

import React, { useState } from 'react';
import { Card, Select, Dropdown, Button } from 'antd';

import { MoreOutlined } from '@ant-design/icons';
import DetailsCard from './DetailsCard';
import { useDispatch } from 'react-redux';
import { deleteTodos, editList } from '../redux/slices/todosSlice';
import { PriorityIcon } from './PriorityIcon';
import { TypeIcon } from './TypeIcon';

export const selectItems = [
	{
		value: 'active',
		label: 'active',
	},
	{
		value: 'resolved',
		label: 'resolved',
	},
];

export default function TodoCard({ card }) {
	const dispatch = useDispatch();
	const [open, setOpen] = useState(false);
	const [openCard, setOpenCard] = useState(false);

	const deleted = card.deleted;

	const setDeleted = () => {
		const id = card._id;
		dispatch(deleteTodos(id));
	};

	const editStatus = (value) => {
		const updatedCard = { ...card, status: value };
		dispatch(editList({ id: card._id, data: updatedCard }));
	};

	const openCardHandler = () => {
		setOpenCard(true);
	};

	const closeCardHandler = () => {
		setOpenCard(false);
	};

	const showEdit = () => {
		setOpen(true);
	};

	const onClose = () => {
		setOpen(false);
	};

	const selectActiveClass =
		card.status !== 'resolved'
			? 'card__select--active'
			: 'card__select--resolved';

	const cardDeleted = deleted ? 'card--deleted' : '';

	const items = [
		{
			key: '1',
			label: <button onClick={showEdit}>Edit</button>,
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
				className={`card ${cardDeleted}`}>
				<div className="card__content">
					<div className="card__head">
						<div className="card__head-box">
							<p className="card__date">{card.created}</p>

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
								options={selectItems}
							/>

							<Button
								type="link"
								className="card__more-link"
								onClick={openCardHandler}>
								<span>More</span>
							</Button>
						</div>
					)}
				</div>
			</Card>

			<EditCard
				open={open}
				card={card}
				onClose={onClose}
			/>

			<DetailsCard
				{...card}
				selectActiveClass={selectActiveClass}
				selectHandler={editStatus}
				closeCardHandler={closeCardHandler}
				openCard={openCard}
				showEdit={showEdit}
			/>
		</>
	);
}
