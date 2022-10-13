import React from "react";
import Navbar from "./../../components/layout/Navbar.js";
import Footer from "./../../components/layout/Footer";
import Hero from "../../components/layout/Hero.js";
import Services from "./Services";
import Statistics from "./Statistics";
import Gallery from "./Gallery";
import ContactUS from "./../../components/layout/ContactUS";
import "../../assets/style/Home_style.css";

const Home = () => {
	return (
		<div>
			<Navbar />
			<div className="body">
				<Hero />
				<Services />
				<Statistics />
				<Gallery />
				<ContactUS />
			</div>
			<Footer />
		</div>
	);
};

export default Home;
