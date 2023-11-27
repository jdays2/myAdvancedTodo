import { CgAddR } from 'react-icons/cg';
import React from 'react';
import { Tooltip } from 'antd';
import { useDispatch } from 'react-redux';
import {
	resetDateOfCreation,
	toggleModal,
} from '../../redux/slices/modalsSlice';

export const AddTodoBtn = ({ date }) => {
	const dispatch = useDispatch();

	const setModalActive = (strModal, strStatus, date) => {
		dispatch(toggleModal({ modal: strModal, status: strStatus, date }));
	};

	const addNewCardHandler = async (e) => {
		e.preventDefault();
		await setModalActive('create', 'true', date);
	};

	return (
		<Tooltip
			placement="bottom"
			title={() => `Click here if you want to create a task for that day.`}>
			<button
				className="button__add-new"
				onClick={addNewCardHandler}>
				<CgAddR className="icon__add-new" />
			</button>
		</Tooltip>
	);
};
