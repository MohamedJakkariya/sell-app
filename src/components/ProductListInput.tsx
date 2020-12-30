/** @format */

import React from 'react';
import styled from 'styled-components';
import Layout from '../Layout';
import LabelInfo from './Label';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const options = [
	'Choose',
	'gram',
	'litre',
	'kg',
	'1/2 kg',
	'1/2 lr',
	'spoon',
	'cup',
];

const ITEM_HEIGHT = 48;

const ProdcutListInput = () => {
	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
	const open = Boolean(anchorEl);

	const [label, setLabel] = React.useState<string>('Choose');

	const handleClick = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = (e) => {
		setAnchorEl(null);
		handleSetLabel(e.target.innerText);
	};

	const handleSetLabel = (s: string) => {
		setLabel(s);
	};

	return (
		<Layout>
			<Product>
				<Overview>
					<TopOverview>
						<div>
							<input
								spellCheck='false'
								type='text'
								placeholder='Name'
								className='nameInput'
							/>

							<div className='quantityInput'>
								<p>Quantity - </p>
								<input type='text' placeholder='Tag unit' spellCheck='false' />
							</div>
						</div>
					</TopOverview>

					<BottomOverview>
						<LabelInfo text={`#${label}`} bg='primary' />
						<div>
							<IconButton
								aria-label='more'
								aria-controls='long-menu'
								aria-haspopup='true'
								onClick={handleClick}>
								<MoreVertIcon />
							</IconButton>
							<Menu
								id='long-menu'
								anchorEl={anchorEl}
								keepMounted
								open={open}
								onClose={handleClose}
								PaperProps={{
									style: {
										maxHeight: ITEM_HEIGHT * 4.5,
										width: '20ch',
									},
								}}>
								{options.map((option) => (
									<MenuItem
										key={option}
										selected={option === 'Choose'}
										onClick={handleClose}>
										{option}
									</MenuItem>
								))}
							</Menu>
						</div>
					</BottomOverview>
				</Overview>
				<Amount>
					<input type='text' placeholder='0.00' />
					<img src='/img/money.svg' alt='money' />
				</Amount>
				<Stock>
					<input type='text' placeholder='0' />
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

	.nameInput {
		width: 100%;
		border: none;
		border-bottom: 1px solid #000;
		outline: none;

		margin: 5px;
		font-size: 20px;
		padding: 4px 4px 0;
	}

	.quantityInput {
		display: flex;
		align-items: center;
		justify-content: space-between;

		input {
			width: 50%;
			border: none;
			outline: none;
			text-align: center;
			border-bottom: 1px solid black;
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
		color: var(--red);
	}
`;

const Amount = styled.div`
	background: white;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;

	input {
		width: 85%;
		margin: 10px;
		text-align: center;
		border: none;
		outline: none;
		border-bottom: 1px solid black;
		font-size: 20px;
	}
`;

const Stock = styled(Amount)``;

export default ProdcutListInput;
