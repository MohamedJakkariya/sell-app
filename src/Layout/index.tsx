/** @format */

import Head from 'next/head';
import Navigation from '../components/Navigation';

function Layout({ children }) {
	return (
		<>
			<Head>
				<title>Homepage | Sell app</title>
				<meta name='viewport' content='initial-scale=1.0, width=device-width' />
			</Head>
			{children}
			<Navigation />
		</>
	);
}

export default Layout;
