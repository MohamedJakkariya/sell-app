/** @format */

import { IconButton, makeStyles } from '@material-ui/core';
import React from 'react';
import { BackButtonProps } from '../../types';
import ArrowBackIosOutlinedIcon from '@material-ui/icons/ArrowBackIosOutlined';
import theme from '../../theme';
import Link from 'next/link';

const BackButton: React.FC<BackButtonProps> = ({ back }) => {
	const useStyles = makeStyles({
		extendedButton: {
			background: theme.palette.primary.main,
			color: '#fff',
			padding: '7px',

			'&:hover': {
				background: theme.palette.primary.main,
			},
			'&:focus': {
				background: theme.palette.primary.main,
			},
			'&:active': {
				background: theme.palette.primary.main,
			},
		},
	});

	const classes = useStyles();

	return (
		<>
			<IconButton onClick={() => back()} className={classes.extendedButton}>
				<ArrowBackIosOutlinedIcon />
			</IconButton>
		</>
	);
};

export default BackButton;
