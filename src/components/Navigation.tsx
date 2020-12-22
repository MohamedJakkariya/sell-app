/** @format */

import styled from 'styled-components';

const Navigation = () => {
	return (
		<NavContainer>
			<ContainerTop>
				<HistoryButton>
					<img src='/img/history.svg' alt='history icon' />
				</HistoryButton>
				<AddButton>
					<img src='/img/add button.svg' alt='' />
				</AddButton>
				<StockButton>
					<img src='/img/stock.svg' alt='history icon' />
				</StockButton>
			</ContainerTop>
			<ContainerBottom></ContainerBottom>
		</NavContainer>
	);
};

const NavContainer = styled.div`
	height: 100px;
	position: fixed;
	bottom: 0;
	left: 0;
	width: 100%;
	z-index: 1;
`;

const ContainerTop = styled.div`
	height: 50%;
	background-color: var(--white);
	display: flex;
	justify-content: space-around;
	align-items: center;
`;

const ContainerBottom = styled.div`
	height: 50%;
	background-color: var(--primary);
`;

const HistoryButton = styled.button`
	background: none;
	outline: none;
	border: none;

	&:hover,
	&:focus {
		background: #dddddd;
	}

	width: 100%;
    height: 100%;
    padding-top: 5px;
`;

const StockButton = styled(HistoryButton)``;

const AddButton = styled.button`
	position: absolute;
	border-radius: 50%;
	top: 50%;
	left: 50%;
	background: none;
	transform: translate(-50%, -50%);
	border: none;
	outline: none;
`;

export default Navigation;
