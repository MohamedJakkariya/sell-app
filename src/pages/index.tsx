/** @format */
import styled from 'styled-components';
import CardExpand from '../components/CardExpand';
import CardInfo from '../components/CardInfo';
import Layout from '../Layout';
import productSellJson from '../json/productSell.json';

interface Props {}

export default function Home<Props>() {
	return (
		<>
			<Layout>
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
								<option value='1'>Mutton</option>
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
