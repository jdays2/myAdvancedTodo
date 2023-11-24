import React from 'react';
import { Link } from 'react-router-dom';
import { Flex, Tag } from 'antd';
import { setRarityClass } from '../../utils/setRarityClass';

export const MiniCellRender = ({ value, eventsMap }) => {
	const date = value.format('YYYY-MM-DD');
	const day = Number(date.split('-')[2]);
	const events = eventsMap[date] || [];

	const isListEmpty = events.length === 0;
	const calCellClass = `calendar__list ${
		isListEmpty ? 'calendar__list--empty' : ''
	}`;

	const tagClass = setRarityClass(events.length);

	return (
		<Link
			to={`/board/${date}`}
			className={calCellClass}>
			<Flex
				vertical
				gap="6">
				<span>{day}</span>
				<Tag
					color={tagClass}
					className="calendar__tag">
					{events.length}
				</Tag>
			</Flex>
		</Link>
	);
};
