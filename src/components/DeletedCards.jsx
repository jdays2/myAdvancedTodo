import React from 'react';
import TodoCard from './TodoCard';
import { Empty } from 'antd';

export default function DeletedCards() {
	return (
		<div className="list">
			<Empty className='empty'/>
		</div>
	);
}
