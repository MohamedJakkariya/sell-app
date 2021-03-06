/** @format */

import styled from 'styled-components';
import { CardInfoProps } from '../types';

const CardInfo: React.FC<CardInfoProps> = ({ amount, image, title }) => {
	return (
		<Container>
			<Money>
				<img src={`/img/${image}.svg`} alt={image} />
				<h3>{amount}</h3>
			</Money>
			<Label>{title}</Label>
		</Container>
	);
};

const Container = styled.div`
	background: white;
	width: 40%;
	max-height: 120px;
	border-radius: 20px;
	box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.25);
`;

const Money = styled.div`
	display: flex;
	justify-content: space-around;
	align-items: center;
	padding: 10px;
	h3 {
		font-weight: bolder;
	}
`;

const Label = styled.h5`
	text-align: center;
	padding-bottom: 10px;
`;

export default CardInfo;
