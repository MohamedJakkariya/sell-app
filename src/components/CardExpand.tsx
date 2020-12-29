/** @format */

import React from 'react';
import { CardExpandProps } from '../types';
import styled from 'styled-components';
import LabelInfo from './Label';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Button, IconButton } from '@material-ui/core';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import EditIcon from '@material-ui/icons/Edit';

const CardExpand: React.FC<CardExpandProps> = ({
	amount,
	skus,
	orderId,
	descripton,
	label,
	labelColor,
	labelAmount,
	time,
	when,
}) => {
	return (
		<>
			<CardExpandContainer>
				<LeftContainer>
					<h4>
						<span>#{orderId}</span>
						{skus}
					</h4>
					<p>{descripton}</p>
					<LabelInfo text={label} bg={labelColor} amount={labelAmount} />
				</LeftContainer>
				<RightContainer>
					<TopSection>
						<AmountInfo>
							<img src='/img/money.svg' alt='money icon' />
							<h3>{amount}</h3>
						</AmountInfo>
						<PopupState variant='popover' popupId='demo-popup-menu'>
							{(popupState) => (
								<React.Fragment>
									<IconButton {...bindTrigger(popupState)}>
										<MoreVertIcon />
									</IconButton>
									<Menu {...bindMenu(popupState)}>
										<MenuItem onClick={popupState.close}>
											<EditIcon style={{ marginRight: '10px' }} /> Edit
										</MenuItem>
									</Menu>
								</React.Fragment>
							)}
						</PopupState>
					</TopSection>
					<TimeLabel>
						{time} <span>{when}</span>
					</TimeLabel>
				</RightContainer>
			</CardExpandContainer>
		</>
	);
};

const CardExpandContainer = styled.div`
	background-color: var(--white);
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 5px;
	min-height: 100px;
	max-height: 140px;
	margin: 10px;
	padding: 10px;
	border-top-right-radius: 25px;
	border-bottom-left-radius: 10px;
`;

const LeftContainer = styled.div`
	h4 {
		font-weight: 300;
		span {
			font-weight: 700;
			padding: 0 3px;
		}
	}

	p {
		padding: 10px 0;
	}
`;

const RightContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;

const TopSection = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;

	.editIcon {
		padding: 10px;
	}
`;

const AmountInfo = styled.div`
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	width: 90%;

	h3 {
		font-size: 25px;
		padding: 0 8px;
	}
`;

const TimeLabel = styled.p`
	text-align: right;

	span {
		color: var(--red);
	}
`;

export default CardExpand;
