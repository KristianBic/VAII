import React from "react";
import videoVrtnePrace from "../../assets/image/videos/hero-vrtne-prace.mp4";
import Rectangle from "../../assets/image/svgs/HeroRectangleBigger.svg";
import mainLogo from "../../assets/image/images/marpal_png.png";
import "../../assets/style/Home_style.css";

export default () => {
	return (
		<div className="hero">
			<img class="hero-logo" src={mainLogo} alt="Marpal logo" />
			<div className="hero-container">
				<div className="swiper">
					<div className="swiper-wrapper">
						<div className="swiper-slide vrty">
							<div className="mediaContainer">
								<video id="firstVid" className="hero-backgroundImage" autoplay="true" loop muted>
									<source src={videoVrtnePrace} type="video/mp4" />
								</video>
							</div>
						</div>
					</div>
					<img className="hero-rectangle" src={Rectangle} />
					<div className="text-Container">
						<div className="text" data-slide_number="1">
							<h1>špecialisti na vŕtanie studní</h1>
							<p>
								Poskytujeme prvotriednu a profesionálnu realizáciu studní na mieru pre maximálnu spokojnosť zákazníka.
							</p>
							<a className="button" href="<?php echo BASE_URL; ?>vrtne-prace">
								Zisti viac
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
