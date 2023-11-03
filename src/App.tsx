import "./main.scss";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import { Summary } from "./pages/Summary";
import { Details } from "./pages/Details";

const App = () => {
	return (
		<>
			<h1 className="text-3xl text-yellow-200 mb-3">
				React Vite site from scratch
			</h1>

			<BrowserRouter>
				<nav>
					<ul>
						<NavLink to="/summary">Summary</NavLink>
					</ul>
					<ul>
						<NavLink to="/details">Details</NavLink>
					</ul>
				</nav>
				<div className="content border p-4">
					<Routes>
						<Route path="/summary" element={<Summary />} />
						<Route path="/details">
							<Route index element={<Details />} />
							<Route path=":id" element={<Details />} />
						</Route>
					</Routes>
				</div>
			</BrowserRouter>
		</>
	);
};
export default App;
