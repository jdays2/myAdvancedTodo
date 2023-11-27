import React from 'react';
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

import { addTodos } from '../redux/slices/todosSlice';
import { useDispatch, useSelector } from 'react-redux';
import { getDate } from '../utils/getDate';

import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import { resetDateOfCreation } from '../redux/slices/modalsSlice';
import { PriorityIcon } from './ui/PriorityIcon';
import { TypeIcon } from './ui/TypeIcon';
const dateFormat = 'YYYY-MM-DD';
dayjs.extend(customParseFormat);

const { TextArea } = Input;

export default function CreateCard({ open, onClose }) {
	const dispatch = useDispatch();
	const { dateOfCreation } = useSelector((state) => state.modals);

	const handleFormSubmit = async (value) => {
		value.created = dateOfCreation.length ? dateOfCreation : getDate();
		value.deadline = value.deadline.format(dateFormat);
		value.status = 'active';
		await dispatch(addTodos(value));
		dispatch(resetDateOfCreation());
		onClose();
	};

	return (
		<Drawer
			title={
				dateOfCreation.length
					? `Create a TODO for ${dateOfCreation}`
					: `Create New TODO`
			}
			placement="right"
			onClose={onClose}
			open={open}>
			<Form
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
									min:10
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
