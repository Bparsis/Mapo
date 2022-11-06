import React, { useContext } from 'react';
import { Outlet } from 'react-router-dom'
import { AppContext } from '../../Utils/ContextProvider';
import Header from './Layout/Header';

const Layout = () => {

	const AppCtx = useContext(AppContext);
	const { theme } = { ...AppCtx }

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