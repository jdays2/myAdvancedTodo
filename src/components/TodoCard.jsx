import EditCard from './EditCard';

import React, { useState } from 'react';
import { Card, Space, Select, Dropdown, Drawer, Row, Col, Button } from 'antd';

import { MoreOutlined } from '@ant-design/icons';
import DetailsCard from './detailsCard';

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

export default function TodoCard() {
	const [open, setOpen] = useState(false);
	const [active, setActive] = useState(true);
	const [deleted, setDeleted] = useState(false);
	const [openCard, setOpenCard] = useState(false);

	const openCardHandler = (e) => {
		if (
			deleted ||
			e.target.closest('.card__select') ||
			e.target.closest('.ant-dropdown-trigger') ||
			e.target.closest('.ant-dropdown-menu-title-content') ||
			e.target.closest('.ant-select-item-option-content')
		) {
			return;
		}
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

	const selectHandler = (value) => {
		if (value === 'active') {
			setActive(true);
		} else {
			setActive(false);
		}
	};

	const deleteCard = () => {
		setDeleted(true);
	};

	const selectActiveClass = active
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
			label: <button onClick={deleteCard}>Remove</button>,
		},
	];

	return (
		<>
			<Card
				hoverable={deleted ? false : true}
				className={`card ${cardDeleted}`}>
				<div
					className="card__content"
					onClick={openCardHandler}>
					<div className="card__head">
						<p className="card__date">01.10.23 03:24</p>
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
					<p className="card__title">Hello</p>
					{deleted ? (
						<span className="card__status">DELETED</span>
					) : (
						<Select
							defaultValue="active"
							className={`card__select ${selectActiveClass}`}
							bordered={false}
							onChange={selectHandler}
							options={selectItems}
						/>
					)}
				</div>
			</Card>

			<EditCard
				open={open}
				onClose={onClose}
			/>

			<DetailsCard
				selectActiveClass={selectActiveClass}
				selectHandler={selectHandler}
				closeCardHandler={closeCardHandler}
				openCard={openCard}
				showEdit={showEdit}
			/>
		</>
	);
}
