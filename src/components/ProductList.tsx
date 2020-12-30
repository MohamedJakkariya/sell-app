/** @format */

import React from 'react';
import styled from 'styled-components';
import Layout from '../Layout';
import LabelInfo from './Label';
import { ProductListProps } from '../types';
import { IconButton, Menu, MenuItem } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';

const ProdcutList: React.FC<ProductListProps> = ({
	amount,
	remStocks,
	quantity,
	date,
	label,
	labelColor,
	productId,
	productName,
}) => {
	return (
		<Layout>
			<Product>
				<Overview>
					<TopOverview>
						<div>
							<h4>
								<span>#{productId}</span>
								{productName}
							</h4>
							<p>Quantity - {quantity}</p>
						</div>
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
					</TopOverview>

					<BottomOverview>
						<LabelInfo text={label} bg={labelColor} />
						<p>{date}</p>
					</BottomOverview>
				</Overview>
				<Amount>
					<h3>{amount}</h3>
					<img src='/img/money.svg' alt='money' />
				</Amount>
				<Stock>
					<h3>{remStocks}</h3>
					<img src='/img/stockBox.svg' alt='stockBox' />
				</Stock>
			</Product>
		</Layout>
	);
};

const Product = styled.div`
	display: grid;
	grid-template-columns: 6fr 2fr 2fr;
	gap: 5px;

	margin: 0.5rem 0;
`;

const Overview = styled.div`
	background: white;
	padding: 8px;
	border-top-left-radius: 25px;
	border-bottom-right-radius: 10px;
`;

const TopOverview = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	h4 {
		padding: 5px 0;
		font-weight: 300;
		span {
			padding: 0 5px 0;
			font-weight: 700;
		}
	}

	p {
		padding: 0 5px 0;
	}
`;

const BottomOverview = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding-top: 10px;

	p {
		font-size: 10px;
	}
`;

const Amount = styled.div`
	background: white;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;

	h3 {
		margin-bottom: 8px;
		position: relative;

		&:after {
			content: '';
			position: absolute;
			bottom: 0;
			left: 0;
			width: 100%;
			height: 2px;
			background: black;
			z-index: 1;
		}
	}
`;

const Stock = styled(Amount)``;

export default ProdcutList;
