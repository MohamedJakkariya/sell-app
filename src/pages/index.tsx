/** @format */
import styled from 'styled-components';
import CardExpand from '../components/CardExpand';
import CardInfo from '../components/CardInfo';
import Layout from '../Layout';
import productSellJson from '../json/productSell.json';
import { useState } from 'react';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';
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
import Link from 'next/link';

interface Props {}

const useStyles = makeStyles({
	container: {
		display: 'flex',
		flexWrap: 'wrap',
	},
	formControl: {
		minWidth: 120,
	},
});

export default function Home<Props>() {
	const classes = useStyles();

	const [open, setOpen] = useState(false);
	const [productOpen, setProductOpen] = useState(false);

	const [option, setOption] = useState<string>('all');
	const [productOption, setProductOption] = useState<string>('all');

	// For overview option
	const handleOptionChange = (event: React.ChangeEvent<{ value: string }>) =>
		setOption(event.target.value);

	const handleOptionClickOpen = () => setOpen(true);

	const handleOptionClose = () => setOpen(false);

	// For product option
	const handleProductChange = (event: React.ChangeEvent<{ value: string }>) =>
		setProductOption(event.target.value);

	const handleProductClickOpen = () => setProductOpen(true);

	const handleProductClose = () => setProductOpen(false);

	return (
		<>
			<Layout>
				<DashboardContainer>
					<Overview>
						<Header>
							<h1>Overview</h1>
							<Button onClick={handleOptionClickOpen}>
								All
								<ArrowDropDownIcon />
							</Button>

							<Dialog
								disableBackdropClick
								disableEscapeKeyDown
								open={open}
								onClose={handleOptionClose}>
								<DialogTitle>Select options</DialogTitle>
								<DialogContent>
									<form className={classes.container}>
										<FormControl className={classes.formControl}>
											<InputLabel id='demo-dialog-select-label'>
												Choose
											</InputLabel>
											<Select
												labelId='demo-dialog-select-label'
												id='demo-dialog-select'
												value={option}
												onChange={handleOptionChange}
												input={<Input />}>
												<MenuItem value='all'>
													<em>All</em>
												</MenuItem>
												<MenuItem value='low'>Low</MenuItem>
												<MenuItem value='asc'>Ascending</MenuItem>
												<MenuItem value='desc'>Descending</MenuItem>
											</Select>
										</FormControl>
									</form>
								</DialogContent>
								<DialogActions>
									<Button onClick={handleOptionClose} color='primary'>
										Cancel
									</Button>
									<Button onClick={handleOptionClose} color='primary'>
										Ok
									</Button>
								</DialogActions>
							</Dialog>
						</Header>

						<OverviewBody>
							<CardInfo amount={30.0} image='money' title='TOTAL' />
							<CardInfo amount={6} image='money' title='TODAY' />
						</OverviewBody>
					</Overview>

					<Products>
						<Header>
							<h1>products</h1>
							<Button onClick={handleProductClickOpen}>
								All
								<ArrowDropDownIcon />
							</Button>

							<Dialog
								disableBackdropClick
								disableEscapeKeyDown
								open={productOpen}
								onClose={handleProductClose}>
								<DialogTitle>Select options</DialogTitle>
								<DialogContent>
									<form className={classes.container}>
										<FormControl className={classes.formControl}>
											<InputLabel id='demo-dialog-select-label'>
												Choose
											</InputLabel>
											<Select
												labelId='demo-dialog-select-label'
												id='demo-dialog-select'
												value={productOption}
												onChange={handleProductChange}
												input={<Input />}>
												<MenuItem value='all'>
													<em>All</em>
												</MenuItem>
												<MenuItem value='low'>Low</MenuItem>
												<MenuItem value='asc'>Ascending</MenuItem>
												<MenuItem value='desc'>Descending</MenuItem>
											</Select>
										</FormControl>
									</form>
								</DialogContent>
								<DialogActions>
									<Button onClick={handleProductClose} color='primary'>
										Cancel
									</Button>
									<Button onClick={handleProductClose} color='primary'>
										Ok
									</Button>
								</DialogActions>
							</Dialog>
						</Header>

						<ProductsBody>
							<CardInfo amount={20} image='stockBox' title='TOTAL' />
							<CardInfo amount={5} image='stockBox' title='REMAINING' />
						</ProductsBody>
					</Products>

					<RecentSell>
						<Header>
							<h1>Recent Sell</h1>

							<Link href='/history'>
								<Button>
									<DoubleArrowIcon className='icon' />
								</Button>
							</Link>
						</Header>

						<RecentSellBody>
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
						</RecentSellBody>
					</RecentSell>
				</DashboardContainer>
			</Layout>
		</>
	);
}

const DashboardContainer = styled.div`
	margin-bottom: 6.5rem;
`;

const Overview = styled.div`
	display: flex;
	flex-direction: column;
`;

const OverviewBody = styled.div`
	display: flex;
	justify-content: space-around;
`;

const Header = styled.div`
	display: flex;
	justify-content: space-between;
	padding: 15px;
	align-items: center;

	.icon,
	h1 {
		font-weight: 400;
		font-size: 24px;
	}
`;

const Products = styled(Overview)``;

const ProductsBody = styled(OverviewBody)``;

const RecentSell = styled.div`
	padding: 0 10px;
	margin: auto;
`;

const RecentSellBody = styled(OverviewBody)`
	flex-direction: column;
`;
