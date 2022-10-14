import { Routes, Route, Router } from "react-router-dom";

import Home from "./pages/Home/Home";
import Contact from "./pages/Contact/Contact";
import Login from "./pages/Login/Login";
import References from "./pages/References/References";
import ScrollToTop from "./components/ui/ScrollToTop";

function App() {
	return (
		<>
			<ScrollToTop>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/kontakt" element={<Contact />} />
					<Route path="/login" element={<Login />} />
					<Route path="/referencie" element={<References />} />
				</Routes>
			</ScrollToTop>
		</>
	);
}

export default App;
