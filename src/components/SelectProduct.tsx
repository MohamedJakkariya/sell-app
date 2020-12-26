/** @format */

import styled from 'styled-components';
import LabelInfo from './Label';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import { Checkbox, FormControlLabel } from '@material-ui/core';
import RadioButtonUncheckedOutlinedIcon from '@material-ui/icons/RadioButtonUncheckedOutlined';
import CheckCircleOutlinedIcon from '@material-ui/icons/CheckCircleOutlined';
import { SelectProdcutProps } from '../types';

const SelectProduct: React.FC<SelectProdcutProps> = ({
	label,
	labelColor,
	productId,
	productName,
	quantity,
}) => {
	return (
		<>
			<Wrapper>
				<Left>
					<LeftTop>
						<h3>
							#{productId}
							<span>{productName}</span>
						</h3>
						<LeftTopBottom>
							<p>Quantity - {quantity}</p>
							<LabelInfo text={label} bg={labelColor} />
						</LeftTopBottom>
					</LeftTop>
					<LeftBottom>
						<button>
							<RemoveIcon className='icon' />
						</button>
						<span>1</span>
						<button>
							<AddIcon className='icon' />
						</button>
					</LeftBottom>
				</Left>
				<Right>
					<FormControlLabel
						control={
							<Checkbox
								icon={<RadioButtonUncheckedOutlinedIcon className='checkBox' />}
								checkedIcon={<CheckCircleOutlinedIcon className='greenCheck' />}
								name='checkedO'
							/>
						}
						label=''
					/>
				</Right>
			</Wrapper>
		</>
	);
};

const Wrapper = styled.div`
	padding: 10px;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

const Left = styled.div`
	width: 80%;
	background: white;
	display: flex;
	align-items: flex-end;
	justify-content: space-around;
	padding: 10px;
	border-top-right-radius: 25px;
	border-bottom-left-radius: 10px;
`;

const LeftTop = styled.div`
	width: 80%;

	h3 {
		span {
			font-weight: 300;
			padding: 0 5px;
		}
	}
`;

const LeftTopBottom = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-evenly;
	padding-top: 10px;

	p {
		font-size: 12px;
	}
`;

const LeftBottom = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex: 1;

	span {
		margin: 5px;
	}

	button {
		background: none;
		border: 0.2px solid var(--red);
		margin: 0 5px;
		width: 25px;
		height: 25px;
		position: relative;

		.icon {
			position: absolute;
			left: 50%;
			top: 50%;
			transform: translate(-50%, -50%);
		}
	}
`;

const Right = styled.div`
	input {
		border-radius: 50%;
		background-color: var(--green);
		border: none;
		outline: none;
		width: 30px;
		height: 30px;
		color: white;
		padding: 3px;
	}

	.greenCheck,
	.checkBox {
		color: var(--green);
		width: 30px;
		height: 30px;
	}

	.checkbox {
		color: white;
	}

	.checkBox:active,
	.checkBox:focus,
	.checkBox:hover,
	.greenCheck:active,
	.greenCheck:focus,
	.greenCheck:hover {
		color: var(--green);
	}
`;

export default SelectProduct;
