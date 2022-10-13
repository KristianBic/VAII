import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import Contact from "./pages/Contact/Contact";
import Login from "./pages/Login/Login";
import References from "./pages/References/References";

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/kontakt" element={<Contact />} />
				<Route path="/login" element={<Login />} />
				<Route path="/referencie" element={<References />} />
			</Routes>
		</>
	);
}

export default App;
