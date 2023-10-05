import React from 'react';
import {
	FcHighPriority,
	FcMediumPriority,
	FcLowPriority,
} from 'react-icons/fc';

export const PriorityIcon = ({ status }) => (
	<>
		{status === 'critical' ? <FcHighPriority className='icon'/> : null}
		{status === 'urgent' ? <FcMediumPriority className='icon'/> : null}
		{status === 'standard' ? <FcLowPriority className='icon'/> : null}
	</>
);
