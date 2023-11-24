import { Tooltip } from 'antd';
import React from 'react';
import { PriorityIcon } from '../ui/PriorityIcon';
import { AddTodoBtn } from '../ui/AddTodoBtn';
import { Link } from 'react-router-dom';

export const CellRender = ({ value, eventsMap }) => {
	const date = value.format('YYYY-MM-DD');
	const events = eventsMap[date] || [];

	const isListEmpty = events.length === 0;

	const title = isListEmpty ? 'Day is clear' : 'Click here to open day';
	const calCellClass = `calendar__list ${
		isListEmpty ? 'calendar__list--untouch' : ''
	}`;

	return (
		<>
			<Tooltip
				title={title}
				trigger="hover"
				style={{ bottom: '30px' }}>
				<Link
					to={`board/${date}`}
					className={calCellClass}>
					{events.map((event, index) => {
						const rest = events.length - 2;
						if (index <= 1) {
							return (
								<div
									key={index}
									className="calendar__item">
									<PriorityIcon status={event.priority} />
									<strong> {event.title}</strong>
								</div>
							);
						} else if (index === 2 && events.length >= 3) {
							return (
								<div
									key={index}
									className="calendar__item">
									<strong>and ({rest}) more...</strong>
								</div>
							);
						} else return null;
					})}
				</Link>
			</Tooltip>
			<AddTodoBtn date={date} />
		</>
	);
};
