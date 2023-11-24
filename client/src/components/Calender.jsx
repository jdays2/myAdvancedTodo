import { Calendar, Flex, Space, Spin, Tooltip, Typography } from 'antd';
import React, { useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import { useSortedList } from '../hooks/useSortedList';
import { RiQuestionFill } from 'react-icons/ri';
import { monthTransformer } from '../utils/monthTransformer';
import { CellRender } from './calendarRenders/CellRender';
import { createCalendarList } from '../utils/createCalendarList';
import useTitle from '../hooks/useTitle';
const { Title } = Typography;

export const Calender = () => {
	const [sortBy] = useOutletContext();
	const [date, setDate] = useState(monthTransformer(new Date()));
	const { isLoading, sortedList } = useSortedList(sortBy);
	const { eventsMap } = createCalendarList(sortedList);

	useTitle(`Calendar`);

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
				<Flex vertical="false">
					<Title
						level={4}
						className="calendar__month-title">
						{date.month} {date.year}
					</Title>

					<Calendar
						mode="month"
						cellRender={(value) => (
							<CellRender
								value={value}
								eventsMap={eventsMap}
							/>
						)}
						onPanelChange={(d) => {
							setDate(monthTransformer(d.$d));
						}}
					/>
				</Flex>
			)}
		</div>
	);
};
