import React from 'react';
import { Space, Select, Drawer, Row, Col, Button } from 'antd';

import { editList, setActiveTodoId } from '../redux/slices/todosSlice';
import { useDispatch, useSelector } from 'react-redux';
import { selectStatusItems } from '../utils/selectFields';
import { selectCardById } from '../utils/getiItemById';

export default function DetailsCard({
	activeId,
	closeCardHandler,
	openCard,
	showEdit,
}) {
	const dispatch = useDispatch();

	const card = useSelector((state) => selectCardById(state, activeId));

	const editStatus = (value) => {
		const updatedCard = { ...card, status: value };
		dispatch(editList({ id: card._id, data: updatedCard }));
	};

	const setActiveTodoIdHandler = (id) => {
		dispatch(setActiveTodoId(id));
	};

	const selectActiveClass =
		card.status !== 'resolved'
			? 'card__select--active'
			: 'card__select--resolved';

	return (
		<Drawer
			title="TODO CARD"
			placement="right"
			onClose={closeCardHandler}
			open={openCard}
			extra={
				<Space>
					<Button
						onClick={() => {
							showEdit();
							closeCardHandler();
							setActiveTodoIdHandler(card._id);
						}}>
						Edit
					</Button>
				</Space>
			}>
			<Row className="card-detail__row">
				<Col
					span={24}
					className="card-detail__col">
					<strong className="card-detail__col-title">Title:</strong>
					<span className="card-detail__col-vlaue">{card.title}</span>
				</Col>
				<Col
					span={24}
					className="card-detail__col">
					<strong className="card-detail__col-title">Status:</strong>
					<Select
						value={card.status}
						className={`card__select ${selectActiveClass}`}
						bordered={false}
						onChange={editStatus}
						options={selectStatusItems}
					/>
				</Col>
				<Col
					span={24}
					className="card-detail__col">
					<strong className="card-detail__col-title">Priority:</strong>
					<span className="card-detail__col-vlaue">{card.priority}</span>
				</Col>
				<Col
					span={24}
					className="card-detail__col">
					<strong className="card-detail__col-title">Type:</strong>
					<span className="card-detail__col-vlaue">{card.type}</span>
				</Col>
				<Col
					span={24}
					className="card-detail__col">
					<strong className="card-detail__col-title">Created:</strong>
					<span className="card-detail__col-vlaue">{card.created}</span>
				</Col>
				<Col
					span={24}
					className="card-detail__col">
					<strong className="card-detail__col-title">Deadline:</strong>
					<span className="card-detail__col-vlaue">{card.deadline}</span>
				</Col>
				<Col
					span={24}
					className="card-detail__col">
					<strong className="card-detail__col-title">Body:</strong>
					<span className="card-detail__col-vlaue">{card.body}</span>
				</Col>
			</Row>
		</Drawer>
	);
}
