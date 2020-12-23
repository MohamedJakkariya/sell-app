/** @format */

import styled from 'styled-components';
import ProductList from '../components/ProdcutList';
import AddOutlinedIcon from '@material-ui/icons/AddOutlined';

export default function history() {
	return (
		<History>
			<Header>
				<BackButton>
					<AddOutlinedIcon />
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
					<AddOutlinedIcon />
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
	padding: 15px;
`;

const Header = styled.div`
	display: flex;
	justify-content: space-between;
`;

const BackButton = styled.button`
	background: none;
	outline: none;
	border: none;
`;

const SubHeader = styled.div`
	padding: 10px 0;
	display: flex;

	button {
		width: 25px;
		height: 25px;
	}
`;

const ProductLists = styled.div``;
