/** @format */

import React from 'react';
import styled from 'styled-components';
import { LabelInfoProps } from '../types';

// Override name colors
const defaultNameColors = {
	primary: '#6d18ab',
	green: '#2ba037',
	red: '#DD636E',
	primaryLight: '#9d66d5',
	secondaryRed: '#c16752',
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
	padding: 2px;
	font-size: 12px;
`;

export default LabelInfo;
