import React from "react";
import "../../assets/style/Home_style.css";
import { ReactComponent as StarIcon } from "./../../assets/image/svgs/star.svg";
import { ReactComponent as MachineIcon } from "./../../assets/image/svgs/machines.svg";
import { ReactComponent as PeopleImage } from "./../../assets/image/svgs/people.svg";

const Statistics = () => {
	return (
		<div class="statistics">
			<div class="statistics-container">
				<div class="single-stat one">
					<StarIcon />
					<div class="single-stat-text">
						<h2>13+</h2>
						<p>Rokov skúsenosti</p>
					</div>
				</div>
				<div class="single-stat">
					<MachineIcon />
					<div class="single-stat-text">
						<h2>20</h2>
						<p>Profesionálnych strojov</p>
					</div>
				</div>
				<div class="single-stat three">
					<PeopleImage />
					<div class="single-stat-text">
						<h2 class="counter">1000+</h2>
						<p>Spokojných zákaznikov</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Statistics;
