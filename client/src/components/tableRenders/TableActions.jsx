import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
	deleteTodos,
	getList,
	setActiveTodoId,
} from '../../redux/slices/todosSlice';
import { toggleModal } from '../../redux/slices/modalsSlice';
import { Button, Popconfirm, Space } from 'antd';

export const TableActions = ({ id }) => {
	const [editing, setEditing] = useState(false);
	const dispatch = useDispatch();

	const setModalActive = (id, strModal, strStatus) => {
		dispatch(setActiveTodoId(id));
		dispatch(toggleModal({ modal: strModal, status: strStatus }));
	};

	const setDeleted = async (id) => {
		await dispatch(deleteTodos(id));
		dispatch(getList());
	};

	const toggleEdit = () => {
		setEditing(!editing);
	};

	return (
		<Space size="middle">
			<Button
				type="default"
				onClick={() => {
					setModalActive(id, 'edit', 'true');
				}}>
				Edit
			</Button>

			<Popconfirm
				title="Todo will be permanently deleted. Are you sure?"
				onConfirm={() => setDeleted(id)}>
				<Button danger>Delete</Button>
			</Popconfirm>
		</Space>
	);
};
