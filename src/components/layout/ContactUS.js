import React from "react";
import ContactUsImage from "../../assets/image/images/contactUs.png";

const ContactUS = () => {
	return (
		<div class="contactUs">
			<img class="contactUs-image" src={ContactUsImage} alt="" />
			<div class="contactUs-container">
				<div class="contactUs-content">
					<h3>Oslovila Vás naša ponuka?</h3>
					<p>Ak áno, neváhajte nás kontaktovať a pridajte sa k viac ako tisíc spokojným zákazníkom</p>
					<a class="button" href="<?php echo BASE_URL; ?>kontakt">
						Kontaktujte nás
					</a>
				</div>
			</div>
		</div>
	);
};

export default ContactUS;
