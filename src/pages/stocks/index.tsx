/** @format */

import React from 'react';
import styled from 'styled-components';
import ProductList from '../../components/ProductList';
import ProductListInput from '../../components/ProductListInput';
import AddOutlinedIcon from '@material-ui/icons/AddOutlined';
import IconButton from '@material-ui/core/IconButton';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import productListJson from '../../json/productList.json';
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
import BackButton from '../../components/BackButton';
import { useRouter } from 'next/router';
import CheckOutLined from '@material-ui/icons/CheckOutLined';

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

export default function history() {
	const classes = useStyles();
	const { back } = useRouter();

	const [open, setOpen] = React.useState(false);
	const [option, setOption] = React.useState<string>('all');

	const [addClick, setAddClick] = React.useState(false);

	const handleChange = (event: React.ChangeEvent<{ value: string }>) =>
		setOption(event.target.value);

	const handleClickOpen = () => setOpen(true);

	const handleClose = () => setOpen(false);

	const handleAddClick = (event) => {
		console.log(event.currentTarget.className);
		setAddClick(!addClick);

		event.currentTarget.style.background = !addClick
			? 'var(--red)'
			: 'var(--green)';
	};

	return (
		<History>
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
									<MenuItem value='desc'>Descending</MenuItem>
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

			<SubHeader>
				<h1>Products</h1>
				<IconButton
					onClick={(e) => handleAddClick(e)}
					className={classes.extendedIconButton}>
					<AddOutlinedIcon className={addClick ? 'crossButton' : ''} />
				</IconButton>
				{addClick ? (
					<IconButton className={classes.extendedIconButton}>
						<CheckOutLined />
					</IconButton>
				) : (
					<></>
				)}
			</SubHeader>

			<ProductLists>
				{addClick ? <ProductListInput /> : <></>}

				{productListJson.map(
					({
						amount,
						remStocks,
						date,
						label,
						labelColor,
						productId,
						productName,
						quantity,
					}) => (
						<ProductList
							amount={amount}
							remStocks={remStocks}
							date={date}
							label={`#${label}`}
							labelColor={labelColor}
							productId={productId}
							productName={productName}
							quantity={quantity}
							key={productId}
						/>
					),
				)}
			</ProductLists>
		</History>
	);
}

const History = styled.div`
	min-height: 100%;
	min-width: 100%;
	padding: 10px;
`;

const Header = styled.div`
	display: flex;
	justify-content: space-between;
`;

const SubHeader = styled.div`
	padding: 10px 0;
	display: flex;

	.crossButton {
		transform: rotate(45deg);
		/* background: var(--red); */
		transition: 0.5s transform;
	}
`;

const ProductLists = styled.div`
	display: flex;
	flex-direction: column;
	padding-bottom: 6rem;
`;
