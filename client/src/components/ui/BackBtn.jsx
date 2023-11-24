import { Button, Flex } from 'antd';
import React from 'react';
import { IoIosArrowRoundBack } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';

export const BackBtn = () => {
	const navigate = useNavigate();

	const goBackHandler = () => {
		navigate(-1);
	};

	return (
		<Button
			className="back-btn"
			onClick={goBackHandler}>
			<Flex align='center' gap={6}>
				<IoIosArrowRoundBack className='icon__back'/> <span>Back</span>
			</Flex>
		</Button>
	);
};
