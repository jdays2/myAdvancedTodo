import React, { useState } from 'react';
import {
	Card,
	Space,
	Form,
	Select,
	Dropdown,
	Drawer,
	Row,
	Col,
	Input,
	DatePicker,
	Button,
} from 'antd';

import dayjs from 'dayjs';

import customParseFormat from 'dayjs/plugin/customParseFormat';
import { MoreOutlined } from '@ant-design/icons';
import TextArea from 'antd/es/input/TextArea';

const dateFormat = 'YYYY-MM-DD';
dayjs.extend(customParseFormat);

const selectItems = [
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
			<Drawer
				title="Edit TODO CARD"
				placement="right"
				onClose={onClose}
				open={open}
				extra={
					<Space>
						<Button onClick={onClose}>Cancel</Button>
						<Button
							onClick={onClose}
							type="primary">
							Submit
						</Button>
					</Space>
				}>
				<Form
					layout="vertical"
					hideRequiredMark>
					<Row gutter={16}>
						<Col span={12}>
							<Form.Item
								name="name"
								label="Title"
								rules={[
									{
										required: true,
										message: 'Required field',
									},
								]}>
								<Input defaultValue="Your Title" />
							</Form.Item>
						</Col>
						<Col span={12}>
							<Form.Item
								name="priority"
								label="Priority"
								rules={[
									{
										required: true,
										message: 'Required field',
									},
								]}>
								<Select
									placeholder="Please choose the type"
									defaultValue={'standard'}>
									<Option value="critical">Critical</Option>
									<Option value="urgent">Urgent</Option>
									<Option value="standard">Standard</Option>
								</Select>
							</Form.Item>
						</Col>
					</Row>
					<Row gutter={16}>
						<Col span={12}>
							<Form.Item
								name="type"
								label="Type"
								rules={[
									{
										required: true,
										message: 'Please choose the type',
									},
								]}>
								<Select
									placeholder="Please choose the type"
									defaultValue={'Work'}>
									<Option value="Personal">Personal</Option>
									<Option value="Work">Work</Option>
								</Select>
							</Form.Item>
						</Col>

						<Col span={12}>
							<Form.Item
								name="deadline"
								label="Deadline"
								rules={[
									{
										required: true,
										message: 'Please choose the date',
									},
								]}>
								<DatePicker
									defaultValue={dayjs("2022.02.10", dateFormat)}
									style={{
										width: '100%',
									}}
								/>
							</Form.Item>
						</Col>
					</Row>
					<Row gutter={16}>
						<Col span={24}>
							<Form.Item
								name="body"
								label="body"
								rules={[
									{
										required: true,
										message: 'Required field',
									},
								]}>
								<TextArea
									rows={6}
									defaultValue="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo,
									sapiente. Excepturi nam voluptatum omnis voluptates, eum odio
									quam in accusamus sunt totam maiores incidunt. Laudantium quasi
									odit ea hic accusamus."
									placeholder="maxLength is 250"
									maxLength={250}
								/>
							</Form.Item>
						</Col>
					</Row>
				</Form>
			</Drawer>

			<Drawer
				title="TODO CARD"
				placement="right"
				onClose={closeCardHandler}
				open={openCard}>
				123
			</Drawer>
		</>
	);
}
