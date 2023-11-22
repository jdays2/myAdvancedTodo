import React from 'react';
import { useDispatch } from 'react-redux';
import { setActiveTodoId } from '../../redux/slices/todosSlice';
import { toggleModal } from '../../redux/slices/modalsSlice';
import { Button, Space } from 'antd';

export const TableEdit = ({ id }) => {
  const dispatch = useDispatch();

	const setModalActive = (id, strModal, strStatus) => {
		dispatch(setActiveTodoId(id));
		dispatch(toggleModal({ modal: strModal, status: strStatus }));
	};
	return (
		<Space
			size="middle"
			onClick={() => {
				setModalActive(id, 'edit', 'true');
			}}>
			<Button type="default">Edit</Button>
		</Space>
	);
};
