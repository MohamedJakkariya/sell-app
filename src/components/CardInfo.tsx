/** @format */

import styled from 'styled-components';

interface Props{
    amount: number,
    image: string,
}

const CardInfo: React.FC<Props> = ({amount, image}) => {
	return (
		<>
			<PlainCard>
				<Money>
					<img src='/img/money.svg' alt='money' />
                    <h3>50.00</h3>
				</Money>
                <Label>SELL</Label>
			</PlainCard>
		</>
	);
}

const PlainCard = styled.div`
    width : 100px;
    height: 50px;
    border: 1px solid black;
    background: red;
`;

const Money = styled.div``;

const Label = styled.h5``;

export default CardInfo;