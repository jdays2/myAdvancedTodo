import { SmileFilled } from '@ant-design/icons';
import { Button } from 'antd';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import EditCard from './EditCard';

const fetchz = () => {
	const data = {
		title: 'Заголовок задачи',
		body: 'Описание задачи',
		type: 'Тип задачи',
		status: 'Статус задачи',
		priority: 'Приоритет задачи',
		created: 'Дата создания задачи',
		deadline: 'Срок выполнения задачи',
	};

	fetch('http://localhost:3001/createTodo', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(data),
	})
		.then((response) => response.json())
		.then((result) => {
			console.log(result);
		})
		.catch((error) => {
			console.error('Ошибка:', error);
		});
};

export default function Header() {
	const [open, setOpen] = useState(false);

	// useEffect(() => {
	// 	fetchz();
	// }, []);

	const openHandler = () => {
		fetch();
		setOpen(true);
	};
	const onClose = () => {
		setOpen(false);
	};
	return (
		<>
			<div className="header container">
				<Link
					to="/"
					className="header__logo">
					<SmileFilled />
					<span>Lets todo it!</span>
				</Link>

				<Button onClick={openHandler}>Add new todo</Button>
			</div>
			<EditCard
				open={open}
				onClose={onClose}
			/>
		</>
	);
}
