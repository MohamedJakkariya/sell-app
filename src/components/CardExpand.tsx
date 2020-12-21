/** @format */

import React from 'react';
import { CardExpandProps } from '../types';
import styled from 'styled-components';
import LabelInfo from './Label';

const CardExpand: React.FC<CardExpandProps> = () => {
	return (
		<>
			<CardExpandContainer>
				<RightContainer>
					<h4>
						<span>#3</span>
						Cxye3q
					</h4>
					<p>Made crispy with spicy</p>
					<LabelInfo text="paid" bg="green"/>
				</RightContainer>
				<LeftContainer>
					<TopSection>
						<AmountInfo>
							<img src='/img/money.svg' alt='money icon' />
							<h3>50.00</h3>
						</AmountInfo>
						<img src='/img/menu_icon.svg' alt='menu icon ' />
					</TopSection>
					<TimeLabel>
						8.13 <span>pm</span>
					</TimeLabel>
				</LeftContainer>
			</CardExpandContainer>
		</>
	);
};

const CardExpandContainer = styled.div``;

const RightContainer = styled.div``;

const LeftContainer = styled.div``;

const Label = styled.p``;

const TopSection = styled.div``;

const AmountInfo = styled.div``;

const TimeLabel = styled.p``;

export default CardExpand;
