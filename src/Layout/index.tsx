/** @format */

import Head from 'next/head';
import Navigation from '../components/Navigation';

const Layout: React.FC<{
	children: any;
	addCheck?: boolean;
}> = ({ children, addCheck }) => {
	return (
		<>
			<Head>
				<title>Homepage | Sell app</title>
				<meta name='viewport' content='initial-scale=1.0, width=device-width' />
			</Head>
			{children}
			<Navigation addCheck={addCheck} />
		</>
	);
};

export default Layout;
