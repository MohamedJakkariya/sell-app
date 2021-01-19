/** @format */

import React from 'react';
import styled from 'styled-components';
import Layout from '../../Layout';
import CardExpand from '../../components/CardExpand';
import productSellJson from '../../json/productSell.json';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle,
	FormControl,
	Input,
	InputLabel,
	makeStyles,
	MenuItem,
	Select,
} from '@material-ui/core';
import theme from '../../theme';
import BackButton from '../../components/layout/BackButton';
import { useRouter } from 'next/router';

const useStyles = makeStyles({
	extendedIconButton: {
		background: theme.palette.secondary.main,
		color: '#fff',
		padding: '8px',
		marginLeft: '10px',

		'&:hover': {
			background: theme.palette.secondary.main,
		},
		'&:focus': {
			background: theme.palette.secondary.main,
		},
		'&:active': {
			background: theme.palette.secondary.main,
		},
	},
	container: {
		display: 'flex',
		flexWrap: 'wrap',
	},
	formControl: {
		minWidth: 120,
	},
});

const index = () => {
	const classes = useStyles();
	const { back } = useRouter();

	const [open, setOpen] = React.useState(false);
	const [option, setOption] = React.useState<string>('all');

	const handleChange = (event: React.ChangeEvent<{ value: string }>) =>
		setOption(event.target.value);

	const handleClickOpen = () => setOpen(true);

	const handleClose = () => setOpen(false);

	return (
		<>
			<Layout>
				<Header>
					<BackButton back={back} />
					<Button onClick={handleClickOpen}>
						All
						<ArrowDropDownIcon />
					</Button>

					<Dialog
						disableBackdropClick
						disableEscapeKeyDown
						open={open}
						onClose={handleClose}>
						<DialogTitle>Select options</DialogTitle>
						<DialogContent>
							<form className={classes.container}>
								<FormControl className={classes.formControl}>
									<InputLabel id='demo-dialog-select-label'>Choose</InputLabel>
									<Select
										labelId='demo-dialog-select-label'
										id='demo-dialog-select'
										value={option}
										onChange={handleChange}
										input={<Input />}>
										<MenuItem value='all'>
											<em>All</em>
										</MenuItem>
										<MenuItem value='priceLW'>Price-Low</MenuItem>
										<MenuItem value='asc'>Ascending</MenuItem>
										<MenuItem value='descs'>Descending</MenuItem>
									</Select>
								</FormControl>
							</form>
						</DialogContent>
						<DialogActions>
							<Button onClick={handleClose} color='primary'>
								Cancel
							</Button>
							<Button onClick={handleClose} color='primary'>
								Ok
							</Button>
						</DialogActions>
					</Dialog>
				</Header>

				<SellProducts>
					{productSellJson.map(
						({
							orderId,
							skus,
							amount,
							label,
							labelColor,
							when,
							time,
							description,
							labelAmount,
						}) => (
							<CardExpand
								orderId={orderId}
								skus={skus}
								amount={amount}
								label={label}
								labelColor={labelColor}
								time={time}
								when={when}
								descripton={description}
								labelAmount={labelAmount}
								key={orderId}
							/>
						),
					)}
				</SellProducts>
			</Layout>
		</>
	);
};

const SellProducts = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	padding: 5px;
`;

const Header = styled.div`
	display: flex;
	justify-content: space-between;
	padding: 10px;
`;

export default index;
