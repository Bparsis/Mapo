import React from 'react';
import { Outlet } from 'react-router-dom'
import Header from './Layout/Header';

const Layout = () => {

	return (
		<>
			<Header />
			<div className="page">
				<Outlet />
			</div>
		</>
	)
}

export default Layout