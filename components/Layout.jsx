import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Layout({ children }) {
	return (
		<>
			<Head>
				<meta charset='UTF-8' />
				<title>Real Estate</title>
				<meta
					name='viewport'
					content='initial-scale=1.0, width=device-width'
					key='viewport'
				/>
			</Head>
			<div className='space-y-4'>
				<header className='bg-white border-b border-slate-200'>
					<Navbar />
				</header>

				<main>{children}</main>
				<footer className='bg-white border-t border-slate-200'>
					<Footer />
				</footer>
			</div>
		</>
	);
}

export default Layout;
