import React from 'react';
import { Space, Select, Drawer, Row, Col, Button } from 'antd';

import { selectItems } from './TodoCard';

export default function DetailsCard({
	selectHandler,
	selectActiveClass,
	closeCardHandler,
	openCard,
	showEdit,
	title,
	status,
	body,
	type,
	created,
	deadline,
	priority,
}) {
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
					<span className="card-detail__col-vlaue">{title}</span>
				</Col>
				<Col
					span={24}
					className="card-detail__col">
					<strong className="card-detail__col-title">Status:</strong>
					<Select
						value={status}
						className={`card__select ${selectActiveClass}`}
						bordered={false}
						onChange={selectHandler}
						options={selectItems}
					/>
				</Col>
				<Col
					span={24}
					className="card-detail__col">
					<strong className="card-detail__col-title">Priority:</strong>
					<span className="card-detail__col-vlaue">{priority}</span>
				</Col>
				<Col
					span={24}
					className="card-detail__col">
					<strong className="card-detail__col-title">Type:</strong>
					<span className="card-detail__col-vlaue">{type}</span>
				</Col>
				<Col
					span={24}
					className="card-detail__col">
					<strong className="card-detail__col-title">Created:</strong>
					<span className="card-detail__col-vlaue">{created}</span>
				</Col>
				<Col
					span={24}
					className="card-detail__col">
					<strong className="card-detail__col-title">Deadline:</strong>
					<span className="card-detail__col-vlaue">{deadline}</span>
				</Col>
				<Col
					span={24}
					className="card-detail__col">
					<strong className="card-detail__col-title">Body:</strong>
					<span className="card-detail__col-vlaue">{body}</span>
				</Col>
			</Row>
		</Drawer>
	);
}
