import { notification } from 'antd';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { resetCreating, resetEditing } from '../redux/slices/todosSlice';
import { creating, editing } from '../utils/notificationHandlers';

export const Notifications = () => {
	const [editApi, editContext] = notification.useNotification();
	const [createApi, createContext] = notification.useNotification();
	const dispatch = useDispatch();

	const { isEditingDone, isCreatingDone } = useSelector((state) => state.todos);

	const closeEditHandler = () => {
		dispatch(resetEditing());
	};

	const closeCreateHandler = () => {
		dispatch(resetCreating());
	};

	useEffect(() => {
		if (isEditingDone === 'fulfilled') {
			editing(editApi, 'success', 'Successful.', closeEditHandler);
		}
		if (isEditingDone === 'rejected') {
			editing(editApi, 'error', 'Editing was rejected.', closeEditHandler);
		}
	}, [isEditingDone]);

	useEffect(() => {
		if (isCreatingDone === 'fulfilled') {
			creating(
				createApi,
				'success',
				'Creating was successful.',
				closeCreateHandler,
			);
		}
		if (isCreatingDone === 'rejected') {
			creating(
				createApi,
				'error',
				'Creating was rejected.',
				closeCreateHandler,
			);
		}
	}, [isCreatingDone]);
	return (
		<>
			<div key="edit-context">{editContext}</div>
			<div key="create-context">{createContext}</div>
		</>
	);
};
