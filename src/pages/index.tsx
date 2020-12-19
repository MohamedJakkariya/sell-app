/** @format */
import Head from 'next/head';
import styled from 'styled-components';
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

					<CardInfo amount={30.0} image='money' />
					<CardInfo amount={6} image='stockBox' />
				</Overview>
			</DashboardContainer>
		</>
	);
}

const DashboardContainer = styled.div``;

const Overview = styled.div``;

const Header = styled.div``;
