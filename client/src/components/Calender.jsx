import { Calendar, Space, Spin, Tooltip, Typography } from 'antd';
import React from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import { useSortedList } from '../hooks/useSortedList';
import { PriorityIcon } from './PriorityIcon';
import { RiQuestionFill } from 'react-icons/ri';
const { Title } = Typography;

export const Calender = () => {
	const [sortBy] = useOutletContext();
	const { isLoading, sortedList } = useSortedList(sortBy);

	const eventsMap = {};

	sortedList.forEach((todo) => {
		const date = todo.created.split('T')[0];
		if (!eventsMap[date]) {
			eventsMap[date] = [];
		}

		eventsMap[date].push({ ...todo });
	});

	const dateCell = (value) => {
		const date = value.format('YYYY-MM-DD');
		const events = eventsMap[date] || [];
		const title =
			events.length === 0 ? 'Day is clear' : 'Click here to open day';

		return (
			<Tooltip
				title={title}
				trigger="hover">
				<Link
					to={`board/${date}`}
					className="calendar__list">
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
		);
	};

	return (
		<div className="calendar">
			<Space>
				<Title
					level={3}
					style={{ marginTop: '20px' }}>
					Calendar
				</Title>

				<Tooltip
					placement="rightTop"
					title={`Stay on top of your tasks with our interactive calendar. Each date on the calendar corresponds to a day when you created tasks. Click on a date to see the tasks you created on that day.`}>
					<RiQuestionFill className="question-mark" />
				</Tooltip>
			</Space>
			<Spin
				className="spinner"
				spinning={isLoading}
				size="large"
			/>
			{!isLoading && (
				<Calendar
					mode="month"
					cellRender={dateCell}
				/>
			)}
		</div>
	);
};
