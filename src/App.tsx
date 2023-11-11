import "./main.scss";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import { Summary } from "./pages/Summary";
import { Details } from "./pages/Details";
import { Home } from "./pages/Home";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			staleTime: Infinity,
			cacheTime: Infinity,
		},
	},
});

const App = () => {
	return (
		<>
			<h1 className="text-3xl text-yellow-200 mb-3">
				React Vite site from scratch
			</h1>

			<BrowserRouter>
				<QueryClientProvider client={queryClient}>
					<nav className="flex gap-3 pb-3">
						<ul>
							<NavLink to="/">Home</NavLink>
						</ul>
						<ul>
							<NavLink to="/summary">Summary</NavLink>
						</ul>
						<ul>
							<NavLink to="/details">Details</NavLink>
						</ul>
					</nav>
					<div className="content border p-4 rounded-lg border-orange-600">
						<Routes>
							<Route path="/" element={<Home />} />
							<Route path="/summary" element={<Summary />} />
							<Route path="/details">
								<Route index element={<Details />} />
								<Route path=":id" element={<Details />} />
							</Route>
						</Routes>
					</div>
				</QueryClientProvider>
			</BrowserRouter>
		</>
	);
};
export default App;
