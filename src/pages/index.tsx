/** @format */
import Head from 'next/head';
import styled from 'styled-components';
import CardExpand from '../components/CardExpand';
import CardInfo from '../components/CardInfo';

interface Props {}

export default function Home<Props>() {
	return (
		<>
			<Head>
				<title>Homepage | Sell app</title>
				<meta name='viewport' content='initial-scale=1.0, width=device-width' />
			</Head>

			<DashboardContainer>
				<Overview>
					<Header>
						<h1>Overview</h1>
						<select name='days'>
							<option value='1'>Today</option>
							<option value='7'>Last 7 Days</option>
							<option value='15'>Last 15 Days</option>
							<option value='30'>Last 30 Days</option>
							<option value='6'>Last 6 Months</option>
						</select>
					</Header>

					<OverviewBody>
						<CardInfo amount={30.0} image='money' />
						<CardInfo amount={6} image='money' />
					</OverviewBody>
				</Overview>

				<Products>
					<Header>
						<h1>products</h1>
						<select name='days'>
							<option value='1'>Today</option>
							<option value='7'>Roast</option>
							<option value='15'>Chicken</option>
						</select>
					</Header>

					<ProductsBody>
						<CardInfo amount={20} image='stockBox' />
						<CardInfo amount={5} image='stockBox' />
					</ProductsBody>
				</Products>

				<RecentSell>
					<Header>
						<h1>Recent Sell</h1>
						<img src='/img/gotoicon.svg' alt='goto icon' />
					</Header>

					<RecentSellBody>
						<CardExpand
							orderId={3}
							skus='Cxaye3q'
							amount={50.00}
							label='paid'
							labelColor='green'
							time='9.00'
							when='pm'
							descripton='Made crispy with spicy'
						/>

						<CardExpand
							orderId={2}
							skus='yCslcqa2'
							amount={70.00}
							label='due'
							labelColor='red'
							labelAmount={15}
							time='8.13'
							when='pm'
							descripton='Near shop Keeper boy'
						/>
					</RecentSellBody>
				</RecentSell>
			</DashboardContainer>
		</>
	);
}

const DashboardContainer = styled.div``;

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
