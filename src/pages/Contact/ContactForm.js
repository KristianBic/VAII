import React from "react";
import { ReactComponent as Mail } from "./../../assets/image/svgs/mail.svg";

const ContactForm = () => {
	return (
		<div class="contact">
			<div class="contact-container">
				<div class="contact-container-left">
					<Mail className="mail one" />
					<Mail className="mail two" />
					<Mail className="mail three" />
					<Mail className="mail four" />
					<h3>Kontaktné informácie</h3>
					<p></p>
					<ul>
						<div class="li-group one">
							<li class="li-caption">Sídlo firmy</li>
							<li>Športová 3151, 02401 KNM</li>
						</div>
						<div class="li-group one">
							<li class="li-caption">Korešpondenčná adresa</li>
							<li>Štúrová 1211/63 02404 KNM</li>
						</div>
						<div class="li-group two">
							<li class="li-caption">IBAN</li>
							<li>SK66 1100 0000 0029 2888 9969</li>
						</div>
						<div class="li-group three">
							<li class="li-caption">Konateľ firmy</li>
							<li>Pavol Kubala</li>
						</div>
						<div class="li-group four">
							<li class="li-caption">IČO</li>
							<li>46947035</li>
						</div>
						<div class="li-group five">
							<li class="li-caption">IČ DPH</li>
							<li>SK20236669791</li>
						</div>
					</ul>
				</div>
				<div class="contact-container-right formContainer">
					<div class="input-block one">
						<label>Meno</label>
						<input type="text" id="meno" placeholder="Vaše meno" />
					</div>
					<div class="input-block one">
						<label>Priezvisko</label>
						<input type="text" id="priezvisko" placeholder="Vaše priezvisko" />
					</div>
					<div class="input-block one">
						<label>Tel. číslo</label>
						<input type="tel" id="telefon" placeholder="Váš telefón" />
					</div>
					<div class="input-block one">
						<label>Email</label>
						<input type="email" id="email" placeholder="Váš email" />
					</div>
					<div class="input-block two">
						<label>Predmet správy</label>
						<input type="text" id="predmet" placeholder="Predmet" />
					</div>
					<div class="input-block two">
						<label>Správa</label>
						<textarea type="text" id="sprava" placeholder="Vaša správa"></textarea>
					</div>
					<button class="form-button button sendEmailBtn">Odoslať</button>
				</div>
			</div>
		</div>
	);
};

export default ContactForm;
