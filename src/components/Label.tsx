/** @format */

import React from 'react';
import styled from 'styled-components';
import { LabelInfoProps } from '../types';

const LabelInfo: React.FC<LabelInfoProps> = ({ text, amount, bg }) => {
	return (
		<>
			<Label>
				{text} {amount ? `- ${amount}`: ''}
			</Label>
		</>
	);
};

const Label = styled.p`
    background-color : #2BA037;
    color: white;
    max-width: 80px;
    text-align: center;
    margin: 2rem auto;
    border-radius: 25px;
    padding: 5px 10px;
`;

export default LabelInfo;
