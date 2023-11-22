import { Button, Result } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';

export const NotFound = () => {
	return (
		<Result
			status="404"
			title="404"
			subTitle="Sorry, This page doesn't exist..."
			extra={
				<Link to="/">
					<Button type="primary">Back Home</Button>
				</Link>
			}
		/>
	);
};
