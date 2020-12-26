/** @format */

interface CardExpandProps {
	amount: number;
	orderId: number;
	skus: string;
	descripton?: string;
	label: string;
	labelColor: string;
	labelAmount?: number;
	time: string;
	when: string;
}

interface CardInfoProps {
	amount: number;
	image: string;
}

interface LabelInfoProps {
	amount?: number;
	text: string;
	bg: string;
}

interface ProductListProps {
	amount: number;
	remStocks: number;
	quantity: number;
	productId: number;
	productName: string;
	label: string;
	labelColor: string;
	date: string;
}

interface BackButtonProps {
	back: any;
}

interface SelectProdcutProps {
	quantity: number;
	productId: number;
	productName: string;
	label: string;
	labelColor: string;
}

export type {
	CardExpandProps,
	CardInfoProps,
	LabelInfoProps,
	ProductListProps,
	BackButtonProps,
	SelectProdcutProps,
};
