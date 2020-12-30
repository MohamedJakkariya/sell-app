/** @format */

import styled from 'styled-components';
import BackButton from '../../components/BackButton';
import Layout from '../../Layout';
import SearchIcon from '@material-ui/icons/Search';
import SelectProduct from '../../components/SelectProduct';
import selectProductList from '../../json/selectProductList.json';
import { useRouter } from 'next/router';
import {
	Theme,
	createStyles,
	FormControlLabel,
	withStyles,
} from '@material-ui/core';
import Switch, { SwitchClassKey, SwitchProps } from '@material-ui/core/Switch';
import React from 'react';

interface Styles extends Partial<Record<SwitchClassKey, string>> {
	focusVisible?: string;
}

interface Props extends SwitchProps {
	classes: Styles;
}

const IOSSwitch = withStyles((theme: Theme) =>
	createStyles({
		root: {
			width: 42,
			height: 26,
			padding: 0,
		},
		switchBase: {
			padding: 1,
			'&$checked': {
				transform: 'translateX(16px)',
				color: theme.palette.common.white,
				'& + $track': {
					backgroundColor: 'var(--green)',
					opacity: 1,
					border: 'none',
				},
			},
			'&$focusVisible $thumb': {
				color: 'var(--green)',
				border: '6px solid #fff',
			},
		},
		thumb: {
			width: 24,
			height: 24,
		},
		track: {
			borderRadius: 26 / 2,
			border: `1px solid ${theme.palette.grey[400]}`,
			backgroundColor: theme.palette.grey[50],
			opacity: 1,
			transition: theme.transitions.create(['background-color', 'border']),
		},
		checked: {},
		focusVisible: {},
	}),
)(({ classes, ...props }: Props) => {
	return (
		<Switch
			focusVisibleClassName={classes.focusVisible}
			disableRipple
			classes={{
				root: classes.root,
				switchBase: classes.switchBase,
				thumb: classes.thumb,
				track: classes.track,
				checked: classes.checked,
			}}
			{...props}
		/>
	);
});

const Add = () => {
	const { back } = useRouter();

	const [pay, setPay] = React.useState({
		isPaid: false,
		visibility: 'unset',
	});

	const handlePayChange = () =>
		setPay({
			isPaid: !pay.isPaid,
			visibility: !pay.isPaid ? 'hidden' : 'visible',
		});

	return (
		<>
			<Layout addCheck={true}>
				<Container>
					<BackButton back={back} />
					<Header>
						<Input type='text' placeholder='Search Product' />
						<SearchIcon className='searchIcon' />
					</Header>
				</Container>

				<ProductOption>
					{selectProductList.map(
						({ productId, label, labelColor, productName, quantity }) => (
							<SelectProduct
								productId={productId}
								label={label}
								labelColor={labelColor}
								productName={productName}
								quantity={quantity}
								key={productId}
							/>
						),
					)}
				</ProductOption>

				<TotalOverview>
					<TotalOverviewLeft>
						<TotalOverviewLeftTop>
							<h3>Total</h3>
							<Amount>
								<img src='/img/money.svg' alt='money' />
								<h3>235.00</h3>
							</Amount>
						</TotalOverviewLeftTop>
						<TotalOverviewLeftBottom>
							<input type='text' placeholder='description' />
						</TotalOverviewLeftBottom>
					</TotalOverviewLeft>
					<TotalOverviewRight dueBoxVisibility={pay.visibility}>
						<div className='paidBox'>
							<div className='mainPaidBox'>
								<h3>Paid</h3>

								<FormControlLabel
									control={
										<IOSSwitch
											name='paidSwitch'
											checked={pay.isPaid}
											onChange={handlePayChange}
										/>
									}
									label=''
								/>
							</div>
							<span className='extraSpan'></span>
						</div>
						<div className='dueBox'>
							<div className='mainDueBox'>
								<h3>Due</h3>
								<input type='text' placeholder='0.00' />
							</div>
							<span className='extraSpan'>7.00 pm</span>
						</div>
					</TotalOverviewRight>
				</TotalOverview>
			</Layout>
		</>
	);
};

const Container = styled.div`
	padding: 10px;
`;

const Header = styled.div`
	display: flex;
	justify-content: space-between;
	padding: 15px 0;
	align-items: center;
	position: relative;

	font-size: 20px;

	.searchIcon {
		color: var(--primary);
		font-size: 2rem;
		font-weight: 300;
	}

	&:after {
		content: '';
		position: absolute;
		bottom: 10px;
		left: 0;
		width: 100%;
		height: 2px;
		background: #50555c;
		z-index: 1;
	}
`;

const Input = styled.input`
	flex: 1;
	height: 30px;
	background: transparent;
	border: none;
	font-weight: 300;
	font-size: 20px;
	outline: none;
`;

const ProductOption = styled.div`
	margin-bottom: 13rem;
`;

const TotalOverview = styled.div`
	width: 100%;
	height: 80px;
	position: fixed;
	bottom: 6.3rem;
	left: 0;
	border: 1px solid black;
	/* box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1); */
	background: #fff;
	z-index: 1;

	display: flex;
	justify-content: space-between;
`;

const TotalOverviewLeft = styled.div`
	width: 50%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: flex-start;
	padding: 5px;
`;

const TotalOverviewLeftTop = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
`;

const Amount = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-evenly;

	h3 {
		padding-left: 7px;
		font-weight: 300;
	}
`;

const TotalOverviewLeftBottom = styled.div`
	input {
		width: 100%;
		height: 30px;
		border: none;
		outline: none;
		font-size: 16px;
	}
`;

const TotalOverviewRight = styled.div`
	width: 50%;
	padding: 5px;
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;

	.paidBox,
	.dueBox {
		display: flex;
		align-items: center;
		justify-content: space-between;

		h3 {
			font-weight: 300;
		}

		.extraSpan {
			width: 25%;
		}
	}

	.paidBox {
		.mainPaidBox {
			display: flex;
			width: 75%;
			justify-content: space-between;
			align-items: inherit;
		}
		padding-left: 5px;
	}

	.dueBox {
		.mainDueBox {
			display: inherit;
			width: 75%;
			justify-content: space-between;

			h3 {
				color: var(--red);
			}
			visibility: ${(props) => props.dueBoxVisibility};
		}
		padding-left: 5px;

		justify-content: space-between;
		input {
			width: 50px;
			border: none;
			outline: none;
			font-size: 16px;
		}

		span {
			font-size: 10px;
		}
	}
`;

export default Add;
