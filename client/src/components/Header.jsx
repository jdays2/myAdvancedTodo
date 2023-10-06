import { SmileFilled } from '@ant-design/icons';
import { Button } from 'antd';
import React, {  useState } from 'react';
import { Link } from 'react-router-dom';
import CreateCard from './CreateCard';

export default function Header() {
	const [open, setOpen] = useState(false);


	const openHandler = () => {
		setOpen(true);
	};

	const onClose = () => {
		setOpen(false);
	};

	return (
		<>
			<div className="header">
				<Link
					to="/"
					className="header__logo">
					<SmileFilled />
					<span>Lets todo it!</span>
				</Link>

				<Button onClick={openHandler}>Add new todo</Button>
			</div>
			<CreateCard
				open={open}
				onClose={onClose}
			/>
		</>
	);
}
