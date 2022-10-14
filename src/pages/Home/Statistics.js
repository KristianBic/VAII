import React from "react";
import { ReactComponent as StarIcon } from "./../../assets/image/svgs/star.svg";
import { ReactComponent as MachineIcon } from "./../../assets/image/svgs/machines.svg";
import { ReactComponent as PeopleImage } from "./../../assets/image/svgs/people.svg";

const Statistics = () => {
	return (
		<div className="statistics">
			<div className="statistics-container">
				<div className="single-stat one">
					<StarIcon />
					<div className="single-stat-text">
						<h2>13+</h2>
						<p>Rokov skúsenosti</p>
					</div>
				</div>
				<div className="single-stat">
					<MachineIcon />
					<div className="single-stat-text">
						<h2>20</h2>
						<p>Profesionálnych strojov</p>
					</div>
				</div>
				<div className="single-stat three">
					<PeopleImage />
					<div className="single-stat-text">
						<h2 className="counter">1000+</h2>
						<p>Spokojných zákaznikov</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Statistics;
