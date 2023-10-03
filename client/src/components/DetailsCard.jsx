import React from 'react';
import { Space, Select, Drawer, Row, Col, Button } from 'antd';

import { selectItems } from './TodoCard';

export default function DetailsCard({
	selectHandler,
	selectActiveClass,
	closeCardHandler,
	openCard,
	showEdit,
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
					<span className="card-detail__col-vlaue">Title</span>
				</Col>
				<Col
					span={24}
					className="card-detail__col">
					<strong className="card-detail__col-title">Status:</strong>
					<Select
						defaultValue="active"
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
					<span className="card-detail__col-vlaue">Standart</span>
				</Col>
				<Col
					span={24}
					className="card-detail__col">
					<strong className="card-detail__col-title">Type:</strong>
					<span className="card-detail__col-vlaue">Personal</span>
				</Col>
				<Col
					span={24}
					className="card-detail__col">
					<strong className="card-detail__col-title">Created:</strong>
					<span className="card-detail__col-vlaue">2021-05-14</span>
				</Col>
				<Col
					span={24}
					className="card-detail__col">
					<strong className="card-detail__col-title">Deadline:</strong>
					<span className="card-detail__col-vlaue">2022-02-24</span>
				</Col>
				<Col
					span={24}
					className="card-detail__col">
					<strong className="card-detail__col-title">Body:</strong>
					<span className="card-detail__col-vlaue">
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi ipsam
						quaerat maiores quisquam dignissimos ad explicabo omnis voluptas
						inventore deleniti atque unde nostrum error hic nesciunt excepturi
						consectetur, repellat eum!
					</span>
				</Col>
			</Row>
		</Drawer>
	);
}
