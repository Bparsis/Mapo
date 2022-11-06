import React, { useContext } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NotFound404 from "../Components/Main/NotFound404";
import Layout from "../Components/Main/Layout";
import Home from "../Components/Main/Home";
import { AppContext } from "./ContextProvider";


const Router = (): JSX.Element => {

	const AppCtx = useContext(AppContext);
	const { theme } = { ...AppCtx }

	return (
		<div className="App" data-theme={theme} >
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Layout />}>
						<Route index element={<Home />} />
						<Route path="*" element={<NotFound404 />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</div>
	)
}

export { Router }