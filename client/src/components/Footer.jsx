import React, { useEffect } from 'react';
import {
	CopyrightOutlined,
	GithubOutlined,
	LinkedinOutlined,
} from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { notification } from 'antd';

import { resetCreating, resetEditing } from '../redux/slices/todosSlice';

export default function Footer() {
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

	const editing = (type, message) => {
		editApi[type]({
			message,
			duration: 2,
			placement: 'bottomLeft',
			onClose: closeEditHandler,
		});
	};

	const creating = (type, message) => {
		createApi[type]({
			message,
			duration: 2,
			placement: 'topLeft',
			onClose: closeCreateHandler,
		});
	};

	useEffect(() => {
		if (isEditingDone === 'fulfilled') {
			editing('success', 'Successful.');
		}
		if (isEditingDone === 'rejected') {
			editing('error', 'Editing was rejected.');
		}
	}, [isEditingDone]);

	useEffect(() => {
		if (isCreatingDone === 'fulfilled') {
			creating('success', 'Creating was successful.');
		}
		if (isCreatingDone === 'rejected') {
			creating('error', 'Creating was rejected.');
		}
	}, [isCreatingDone]);

	return (
		<>
			<div className="footer">
				<nav className="footer__socials">
					<a
						href="https://github.com/jdays2/"
						target="_blank"
						className="footer__socials-link">
						<GithubOutlined />
					</a>
					<a
						href="https://www.linkedin.com/in/%D0%BC%D0%B0%D1%80%D0%BA-%D0%B3%D0%BE%D1%80%D1%89%D0%B0%D1%80%D0%B8%D0%BA-4a626a273/  "
						target="_blank"
						className="footer__socials-link">
						<LinkedinOutlined />
					</a>
				</nav>

				<div className="footer__copyright">
					<CopyrightOutlined />
					<span>completely unprotected</span>
				</div>

				<p className="footer__author">JDayS</p>
			</div>

			<div key="edit-context">{editContext}</div>
			<div key="create-context">{createContext}</div>
		</>
	);
}
