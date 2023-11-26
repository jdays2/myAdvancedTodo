import { SmileFilled } from '@ant-design/icons';
import { Button } from 'antd';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import CreateCard from './CreateCard';
import { toggleModal } from '../redux/slices/modalsSlice.js';
import EditCard from './EditCard.jsx';
import DetailsCard from './DetailsCard.jsx';

export default function Header() {
	const { detailsIsActive, editIsActive, createIsActive } = useSelector(
		(state) => state.modals,
	);
	const { activeTodoId } = useSelector((state) => state.todos);

	const dispatch = useDispatch();

	const setModalActive = (strModal, strStatus) => {
		dispatch(toggleModal({ modal: strModal, status: strStatus }));
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

				<Button type="primary"
					onClick={() => {
						setModalActive('create', 'true');
					}}>
					Add new todo
				</Button>
			</div>

			<CreateCard
				open={createIsActive}
				onClose={() => {
					setModalActive('create', 'false');
				}}
			/>
			{activeTodoId.length && (
				<>
					<EditCard
						activeId={activeTodoId}
						open={editIsActive}
						onClose={() => {
							setModalActive('edit', 'false');
						}}
					/>

					<DetailsCard
						activeId={activeTodoId}
						closeCardHandler={() => {
							setModalActive('details', 'false');
						}}
						openCard={detailsIsActive}
						showEdit={() => {
							setModalActive('edit', 'true');
						}}
					/>
				</>
			)}
		</>
	);
}
