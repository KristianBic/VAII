import React from "react";
import gallery from "./../../assets/image/images/gallery_home-page.png";
import { ReactComponent as EmptyGallery } from "./../../assets/image/icons/noImages.svg";

const Gallery = () => {
	return (
		<div class="gallery">
			<div class="gallery-image">
				<img src={gallery} alt="Sídlo Marpalu" />
				<h2>Galéria PROJEKTOV</h2>
				<p>Nahliadnite bližšie do galérie naších úspešných projektov.</p>
			</div>

			<div class="emptyContainer">
				<EmptyGallery />
				<h3>Žiadne galérie.</h3>
				<p>Zatiaľ sme nepridali žiadny záznam z nášho umenia, ale zostaňte nablízku, čoskoro pridáme!</p>
			</div>
		</div>
	);
};

export default Gallery;
