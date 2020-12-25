/** @format */

import styled from 'styled-components';
import BackButton from '../../components/BackButton';
import Layout from '../../Layout';
import SearchIcon from '@material-ui/icons/Search';

const Add = () => {
	return (
		<>
			<Layout addCheck={true}>
				<Container>
					<BackButton />
					<Header>
						<p>Search product</p>
						<SearchIcon className='searchIcon' />
					</Header>
				</Container>
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
	p {
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

export default Add;
