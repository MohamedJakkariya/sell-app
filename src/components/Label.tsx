/** @format */

import React from 'react';
import styled from 'styled-components';
import { LabelInfoProps } from '../types';

// Override name colors
const defaultNameColors = {
	green: '#2ba037',
	red: '#DD636E',
};

const LabelInfo: React.FC<LabelInfoProps> = ({ text, amount, bg }) => {
	return (
		<>
			<Label bg={defaultNameColors[bg] ? defaultNameColors[bg] : bg}>
				{text} {amount ? `- ${amount}` : ''}
			</Label>
		</>
	);
};

const Label = styled.span<{ bg: string }>`
    display: inline-block;
	background-color: ${(props) => props.bg};
	color: white;
	min-width: 70px;
	max-width: 120px;
	text-align: center;
	border-radius: 25px;
	padding: 5px 5px;
`;

export default LabelInfo;
