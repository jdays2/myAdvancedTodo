import React from 'react';
import { Space, Select, Drawer, Row, Col, Button, Flex } from 'antd';

import { editList, setActiveTodoId } from '../redux/slices/todosSlice';
import { useDispatch, useSelector } from 'react-redux';
import { selectStatusItems } from '../utils/selectFields';
import { selectCardById } from '../utils/getiItemById';
import { TypeIcon } from './ui/TypeIcon';
import { PriorityIcon } from './ui/PriorityIcon';
import { TableDeadline } from './tableRenders/TableDeadline';

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
					<span className="card-detail__col-value">{card.title}</span>
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
					<Flex
						align="center"
						gap={6}>
						<strong className="card-detail__col-title">Priority:</strong>
						<PriorityIcon status={card.priority} />
						<span className="card-detail__col-value">{card.priority}</span>
					</Flex>
				</Col>
				<Col
					span={24}
					className="card-detail__col">
					<strong className="card-detail__col-title">Type:</strong>
					<Flex
						align="center"
						gap={6}>
						<TypeIcon type={card.type} />
						<span className="card-detail__col-value">{card.type}</span>
					</Flex>
				</Col>
				<Col
					span={24}
					className="card-detail__col">
					<strong className="card-detail__col-title">Deadline:</strong>
					<TableDeadline record={card} />
				</Col>
				<Col
					span={24}
					className="card-detail__col card-detail__col--body">
					<strong className="card-detail__col-title">Body:</strong>
					<span className="card-detail__col-value">{card.body}</span>
				</Col>
			</Row>
		</Drawer>
	);
}
