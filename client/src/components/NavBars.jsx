import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';

export default function NavBars() {
	return (
		<div className="container">
			<Header />
			<Outlet />
			<Footer />
		</div>
	);
}
