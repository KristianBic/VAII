import React from "react";

import vrtnePrace from "./../../assets/image/images/homepage-services-vrtanie.png";
import stavebnePrace from "./../../assets/image/images/homepage-services-stavba.png";
import vykopovePrace from "./../../assets/image/images/homepage-services-vykop.png";
import { ServiceCard } from "./ServiceCard";

const Services = () => {
	return (
		<div class="services">
			<h2>Ponuka našich služieb</h2>
			<div class="services-container">
				<ServiceCard
					link="/vrtne-prace"
					imageSrc={vrtnePrace}
					imageAlt="Vŕtanie studne"
					heading="Vŕtanie studní"
					description="Firma sa zameriava na vrty pre tepelné čerpadlá, geologické prieskumné, odvodňovacie a stavebné
                        vrty. "
				/>
				<ServiceCard
					link="/stavebne-prace"
					imageSrc={stavebnePrace}
					imageAlt="Stavebné práce"
					heading="Stavebné práce"
					description="Ponúkame realizáciu všetkých druhov stavieb, od stavieb rodinných domov až po rekonštrukciu a modernizáciu všetkých typov budov."
				/>
				<ServiceCard
					link="/zemne-vykopove-prace"
					imageSrc={vykopovePrace}
					imageAlt="Výkopové práce"
					heading="Výkopové práce"
					description="Poskytujeme širokú škálu zemných prác. Vďaka technickej vybavenosti dokážeme pracovať aj v ťažko dostupnom teréne."
				/>
			</div>
		</div>
	);
};

export default Services;
