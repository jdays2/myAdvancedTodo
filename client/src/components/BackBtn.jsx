import { Button } from 'antd';
import React from 'react';
import { useNavigate } from 'react-router-dom';

export const BackBtn = () => {
	const navigate = useNavigate();

	const goBackHandler = () => {
		navigate(-1);
	};

	return <Button className='back-btn' onClick={goBackHandler}>Back</Button>;
};