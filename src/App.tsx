import React, { useEffect } from "react";
import { Route, BrowserRouter, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home/Home";
// import { Toaster } from "react-hot-toast";

function AppRoutes() {
	const { pathname } = useLocation();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);

	return (
		<React.Fragment>
			<Routes>
				{/* <Toaster /> */}
				<Route path="/" element={<Home />} />
			</Routes>
		</React.Fragment>
	);
}

function App() {
	return (
		<BrowserRouter>
			<AppRoutes />
		</BrowserRouter>
	);
}
export default App;
