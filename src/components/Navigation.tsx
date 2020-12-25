/** @format */

import styled from 'styled-components';
import Link from 'next/link';
import { Button, makeStyles } from '@material-ui/core';
import UpdateIcon from '@material-ui/icons/Update';
import ListAltIcon from '@material-ui/icons/ListAlt';
import theme from '../theme';
import AddOutlinedIcon from '@material-ui/icons/AddOutlined';
import CheckIcon from '@material-ui/icons/Check';

const useStyles = makeStyles({
	historyButton: {
		background: 'none',
		outline: 'none',
		border: 'none',
		width: '100%',
		height: '100%',
		paddingTop: '5px',

		'&:focus, &:active, &:hover': {
			background: '#ddd',
		},
	},
	icon: {
		color: theme.palette.primary.main,
		fontSize: '2rem',
	},
	addButton: {
		position: 'absolute',
		borderRadius: '50%',
		top: '50%',
		left: '50%',
		background: '#28DF99',
		transform: 'translate(-50%, -50%)',
		border: 'none',
		outline: 'none',
		zIndex: 1,
		width: '70px',
		height: '70px',

		'&:focus, &:active, &:hover': {
			background: '#28DF99',
		},
	},
	addIcon: {
		color: '#fff',
		fontSize: '3.5rem',
		lineHeight: '1.5rem',
		fontWeight: 300,
	},

	checkIcon: {
		transition: '0.5s linear',
	},
});

const Navigation: React.FC<{
	addCheck: boolean;
}> = ({ addCheck }) => {
	const classes = useStyles();

	return (
		<NavContainer>
			<ContainerTop>
				<Link href='/history'>
					<Button className={classes.historyButton}>
						<UpdateIcon className={classes.icon} />
					</Button>
				</Link>
				<Link href='/add'>
					<Button className={classes.addButton}>
						{addCheck ? (
							<CheckIcon
								className={`${classes.addIcon} ${classes.checkIcon}`}
							/>
						) : (
							<AddOutlinedIcon className={classes.addIcon} />
						)}
					</Button>
				</Link>
				<Link href='/stocks'>
					<Button className={classes.historyButton}>
						<ListAltIcon className={classes.icon} />
					</Button>
				</Link>
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
	box-shadow: -0.1px -0.1px 5px rgba(0, 0, 0, 0.05);
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

export default Navigation;
