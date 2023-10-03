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

const { TextArea } = Input;

import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
const dateFormat = 'YYYY-MM-DD';
dayjs.extend(customParseFormat);

export default function EditCard({
	open,
	onClose,
	title,
	body,
	type,
	created,
	deadline,
	priority,
}) {
	return (
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
							<Input defaultValue={title} />
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
								defaultValue={priority}>
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
								defaultValue={type}>
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
								defaultValue={dayjs({ deadline }, dateFormat)}
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
								defaultValue={body}
								placeholder="maxLength is 250"
								maxLength={250}
							/>
						</Form.Item>
					</Col>
				</Row>
			</Form>
		</Drawer>
	);
}
