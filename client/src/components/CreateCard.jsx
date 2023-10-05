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
} from 'antd';

import { addTodos } from '../redux/slices/todosSlice';
import { useDispatch } from 'react-redux';
import { getDate } from '../utils/getDate';

import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
const dateFormat = 'YYYY-MM-DD';
dayjs.extend(customParseFormat);

const { TextArea } = Input;

export default function CreateCard({ open, onClose }) {
	const dispatch = useDispatch();

	const handleFormSubmit = (value) => {
		value.created = getDate();
		value.deadline = value.deadline.format(dateFormat);
		value.status = 'active';
		dispatch(addTodos(value));
		onClose();
	};

	return (
		<Drawer
			title="Create New TODO"
			placement="right"
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
							<Select placeholder="Please choose the type">
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
