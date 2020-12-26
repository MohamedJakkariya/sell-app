/** @format */

import styled from 'styled-components';
import BackButton from '../../components/BackButton';
import Layout from '../../Layout';
import SearchIcon from '@material-ui/icons/Search';
import SelectProduct from '../../components/SelectProduct';

const Add = () => {
	return (
		<>
			<Layout addCheck={true}>
				<Container>
					<BackButton />
					<Header>
						<Input type='text' placeholder='Search Product' />
						<SearchIcon className='searchIcon' />
					</Header>
				</Container>

				<ProductOption>
					<SelectProduct
						productId={3}
						label='#gram'
						labelColor='primary'
						productName='Chicken 65'
						quantity={100}
					/>
				</ProductOption>
			</Layout>
		</>
	);
};

const Container = styled.div`
	padding: 10px;
`;

const Header = styled.div`
	display: flex;
	justify-content: space-between;
	padding: 15px 0;
	align-items: center;
	position: relative;

	font-size: 20px;

	.searchIcon {
		color: var(--primary);
		font-size: 2rem;
		font-weight: 300;
	}

	&:after {
		content: '';
		position: absolute;
		bottom: 10px;
		left: 0;
		width: 100%;
		height: 2px;
		background: #50555c;
		z-index: 1;
	}
`;

const Input = styled.input`
	flex: 1;
	height: 30px;
	background: transparent;
	border: none;
	font-weight: 300;
	font-size: 20px;
	outline: none;
`;

const ProductOption = styled.div``;

export default Add;
