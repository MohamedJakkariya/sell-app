/** @format */

interface CardExpandProps {
	amount: number;
	orderId: number;
	skus: string;
	descripton?: string;
	label: string;
	labelColor: string;
	labelAmount?:number;
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

export type { CardExpandProps, CardInfoProps, LabelInfoProps };
