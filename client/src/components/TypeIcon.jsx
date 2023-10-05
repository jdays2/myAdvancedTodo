import React from 'react';

import { MdWork } from 'react-icons/md';
import { PiPersonArmsSpreadFill } from 'react-icons/pi';

export const TypeIcon = ({ type }) => (
	<>{type === 'Work' ? <MdWork className='icon'/> : <PiPersonArmsSpreadFill className='icon'/>}</>
);
