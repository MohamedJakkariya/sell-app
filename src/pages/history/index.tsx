/** @format */

import Layout from '../../Layout';
import styled from 'styled-components';
import CardExpand from '../../components/CardExpand';
import productSellJson from '../../json/productSell.json';

const index = () => {
	return (
		<>
			<Layout>
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
    /* display: grid; */
    /* grid-template-columns: 1fr; */
    padding: 1rem;
    background: red;
`;

export default index;
