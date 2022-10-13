import React from "react";
import Navbar from "./../../components/layout/Navbar.js";
import Footer from "./../../components/layout/Footer";
import { SimpleHero } from "./../../components/layout/SimpleHero";
import ContactForm from "./ContactForm.js";
import "../../assets/style/Contact_style.css";
import Map from "./Map";

const Contact = () => {
	return (
		<div>
			<Navbar />
			<div className="body">
				<SimpleHero
					title="Kontaktujte nás"
					description="Ak máte záujem o niektorú z našich služieb, neváhajte využiť náš kontaktný formulár a napíšte nám správu."
				/>
				<ContactForm />
				<Map />
			</div>
			<Footer />
		</div>
	);
};

export default Contact;
