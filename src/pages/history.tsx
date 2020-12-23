/** @format */

import styled from 'styled-components';
import ProductList from '../components/ProdcutList';

export default function history() {
	return (
		<History>
			<Header>
				<BackButton>
					<img src='/img/back.svg' alt='back icon' />
				</BackButton>

				<select>
					<option value='all'>All</option>
					<option value='asc'>Ascending</option>
					<option value='desc'>Descending</option>
				</select>
			</Header>

			<SubHeader>
				<h1>Products</h1>
				<button>
					<img src='/img/add button.svg' alt='add button' />
				</button>
			</SubHeader>

			<ProductLists>
				<ProductList />
			</ProductLists>
		</History>
	);
}

const History = styled.div`
	min-height: 100%;
	min-width: 100%;
	margin: 3rem;
`;

const Header = styled.div``;

const BackButton = styled.button``;

const SubHeader = styled.div``;

const ProductLists = styled.div``;
