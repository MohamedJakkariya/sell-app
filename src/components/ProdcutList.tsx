/** @format */

import styled from 'styled-components';
import Layout from '../Layout';
import LabelInfo from './Label';

const ProdcutList = () => {
	return (
		<Layout>
			<Container>
				<Product>
					<Overview>
						<h4>
							<span>#3</span>
							Chicken - 65
						</h4>
						<p>Quantity - 100</p>

						<BottomOverview>
							<LabelInfo text='#gram' bg='primary' />
							<p>01/21/2020</p>
						</BottomOverview>
					</Overview>
					<Amount>
						<h3>50.00</h3>
						<img src='/img/money.svg' alt='money' />
					</Amount>
					<Stock>
						<h3>6</h3>
						<img src='/img/stockBox.svg' alt='stockBox' />
					</Stock>
				</Product>
			</Container>
		</Layout>
	);
};

const Container = styled.div``;

const Product = styled.div``;

const Overview = styled.div``;

const BottomOverview = styled.div``;

const Amount = styled.div``;

const Stock = styled.div``;

export default ProdcutList;
