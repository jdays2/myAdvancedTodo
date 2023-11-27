import React, { useEffect } from 'react';
import {
	Space,
	Form,
	Select,
	Drawer,
	Row,
	Col,
	Input,
	DatePicker,
	Button,
	Flex,
} from 'antd';

const { TextArea } = Input;

import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import { editList } from '../redux/slices/todosSlice';
import { useDispatch, useSelector } from 'react-redux';
import { selectCardById } from '../utils/getiItemById';
import { TypeIcon } from './ui/TypeIcon';
import { PriorityIcon } from './ui/PriorityIcon';
const dateFormat = 'YYYY-MM-DD';
dayjs.extend(customParseFormat);

export default function EditCard({ activeId, open, onClose }) {
	const dispatch = useDispatch();

	const card = useSelector((state) => selectCardById(state, activeId));

	const handleFormSubmit = (value) => {
		value.deadline = value.deadline.format(dateFormat);

		dispatch(editList({ id: card._id, data: value }));
		onClose();
	};

	const [form] = Form.useForm();

	useEffect(() => {
		form.setFieldsValue({
			title: card.title,
			priority: card.priority,
			type: card.type,
			deadline: dayjs(card.deadline, { format: dateFormat }),
			body: card.body,
		});
	}, [form, card]);

	return (
		<Drawer
			title="Edit TODO CARD"
			placement="right"
			onClose={onClose}
			open={open}>
			<Form
				form={form}
				layout="vertical"
				onFinish={handleFormSubmit}>
				<Row gutter={16}>
					<Col span={12}>
						<Form.Item
							name="title"
							label="Title"
							rules={[
								{
									required: true,
									message: 'Required field',
								},
							]}>
							<Input />
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
							<Select placeholder="Please choose the type">
								<Option value="critical">
									<Flex
										align="center"
										gap={6}>
										<PriorityIcon status={'critical'} />
										<span>Critical</span>
									</Flex>
								</Option>
								<Option value="urgent">
									<Flex
										align="center"
										gap={6}>
										<PriorityIcon status={'urgent'} />
										<span>Urgent</span>
									</Flex>
								</Option>
								<Option value="standard">
									<Flex
										align="center"
										gap={6}>
										<PriorityIcon status={'standard'} />
										<span>Standard</span>
									</Flex>
								</Option>
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
							<Select placeholder="Please choose the type">
								<Option value="Personal">
									<Flex
										align="center"
										gap={6}>
										<TypeIcon type={'Personal'} />
										<span>Personal</span>
									</Flex>
								</Option>
								<Option value="Work">
									<Flex
										align="center"
										gap={6}>
										<TypeIcon type={'Work'} />
										<span>Work</span>
									</Flex>
								</Option>
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
								placeholder="maxLength is 250"
								maxLength={250}
							/>
						</Form.Item>
					</Col>
					<Space>
						<Button onClick={onClose}>Cancel</Button>
						<Button
							type="primary"
							htmlType="submit">
							Submit
						</Button>
					</Space>
				</Row>
			</Form>
		</Drawer>
	);
}
