import { Button, Calendar, Popover } from 'antd';
import { CiCalendar } from 'react-icons/ci';
import React, { useState } from 'react';
import { useSortedList } from '../hooks/useSortedList';
import { useOutletContext } from 'react-router-dom';
import { createCalendarList } from '../utils/createCalendarList';
import { MiniCellRender } from './calendarRenders/MiniCellRender';

export const CalendarMini = () => {
	const [open, setOpen] = useState(false);

	const { isLoading, sortedList } = useSortedList('');
	const { eventsMap } = createCalendarList(sortedList);

	const handleOpenChange = (newOpen) => {
		setOpen(newOpen);
	};

	return (
		<>
			<Popover
				content={
					<Calendar
						className="calendar__mini"
						fullscreen={false}
						fullCellRender={(value) => (
							<MiniCellRender
								value={value}
								eventsMap={eventsMap}
							/>
						)}
					/>
				}
				placement="bottomRight"
				trigger="click"
				open={open}
				onOpenChange={handleOpenChange}>
				<Button className="button__calendar">
					<CiCalendar className="icon__calendar" />
				</Button>
			</Popover>
		</>
	);
};
