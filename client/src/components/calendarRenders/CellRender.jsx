import { Tag, Tooltip } from 'antd';
import React from 'react';
import { PriorityIcon } from '../ui/PriorityIcon';
import { AddTodoBtn } from '../ui/AddTodoBtn';
import { Link } from 'react-router-dom';
import { setRarityClass } from '../../utils/setRarityClass';

export const CellRender = ({ value, eventsMap }) => {
	const date = value.format('YYYY-MM-DD');
	const events = eventsMap[date] || [];

	const isListEmpty = events.length === 0;

	const title = isListEmpty ? 'Day is clear' : 'Click here to open day';
	const calCellClass = `calendar__list ${
		isListEmpty ? 'calendar__list--untouch' : ''
	}`;
	const callCellMobClass = `calendar__cell--mob ${
		isListEmpty ? 'calendar__cell--untouch' : ''
	}`;
	const tagClass = setRarityClass(events.length);

	return (
		<>
			<Tooltip
				title={title}
				trigger="hover"
				style={{ bottom: '30px' }}
				className="calendar__cell">
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

			<Link
				to={`board/${date}`}
				className={callCellMobClass}>
				<Tag color={tagClass}>{events.length > 0 ? events.length : 0}</Tag>
			</Link>

			<AddTodoBtn date={date} />
		</>
	);
};
