import { Col, Empty, Row, Spin } from 'antd';
import React from 'react';
import TodoCard from './TodoCard';
import { useOutletContext } from 'react-router-dom';
import { useSortedList } from '../hooks/useSortedList';

export const Board = () => {
	const [sortBy] = useOutletContext();
	const { isLoading, sortedList } = useSortedList(sortBy);

	return (
		<div className="list">
			<Spin
				className="spinner"
				spinning={isLoading}
				size="large"
			/>
			<Row gutter={[48, 24]}>
				{sortedList
					? sortedList.map((card) => {
							return (
								<Col
									span={6}
									key={card._id}>
									<TodoCard card={card} />
								</Col>
							);
					  })
					: !isLoading && <Empty className="empty" />}
			</Row>
		</div>
	);
};
