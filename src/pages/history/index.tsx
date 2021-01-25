/** @format */

import React from 'react';
import styled from 'styled-components';
import Layout from '../../Layout';
import CardExpand from '../../components/CardExpand';
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
import { server } from '../../config';

interface Props {
	result: boolean;
	data: {
		id: number;
		name: string;
		label: string;
		labelColor: string;
		amount: string;
		remStock?: number;
		totalStock?: number;
		createdAt: string;
		description?: string;
		labelAmount?: number;
	}[];
}

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

const History = ({ data, result }: Props) => {
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
					{data.map(
						({
							id,
							amount,
							name,
							label,
							labelColor,
							createdAt,
							description,
							labelAmount,
						}) => (
							<CardExpand
								orderId={id}
								name={name}
								amount={+amount}
								label={label}
								labelColor={labelColor}
								descripton={description}
								labelAmount={labelAmount}
								key={id}
								createdAt={createdAt}
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

// TODO: set initial get initial props functions
History.getInitialProps = async (context) => {
	const res = await fetch(`${server}/api/shop/fetch/products/1`);
	const { result, data } = await res.json();

	return {
		result,
		data,
	};
};

export default History;
