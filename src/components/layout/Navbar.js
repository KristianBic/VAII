import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { GrClose } from "react-icons/gr";
import "../../assets/style/Navbar_style.css";
import logo from "../../assets/image/svgs/logo.svg";

const Navbar = () => {
	const [click, setClick] = useState(false);
	const handleClick = () => setClick(!click);

	const [sticky, setSticky] = useState(false);
	const handleSticky = () => {
		if (window.scrollY >= 300) {
			setSticky(true);
		} else {
			setSticky(false);
		}
	};
	window.addEventListener("scroll", handleSticky);

	return (
		<header className={sticky ? "header flex sticky header-scrolled" : "header flex"}>
			<Link to={"/"}>
				<img class="header-logo" src={logo} alt="Marpal Logo"></img>
			</Link>
			<nav className={click ? "open" : ""}>
				<div className="mobile-nav-open" onClick={handleClick}>
					{click ? <GrClose size={30} /> : <FaBars size={30} />}
				</div>
				<ul id="primary-navigation" class="primary-navigation flex">
					<li id="nav_services" class="nav-services">
						<a>Služby</a>
						<ul className="dropdown-content">
							<li>
								<Link to={"/"}>Zemné a výkopové práce</Link>
							</li>
							<li>
								<Link to={"/"}>Vrtné práce</Link>
							</li>
							<li>
								<Link to={"/"}>Stavebné prace</Link>
							</li>
							<li>
								<Link to={"/"}>Hydraulická ruka</Link>
							</li>
						</ul>
					</li>
					<li>
						<Link to={"/vozovy-park"}>Vozový park</Link>
					</li>
					<li>
						<Link to={"/galeria"}>Galéria</Link>
					</li>
					<li>
						<Link to={"/referencie"}>Referencie</Link>
					</li>
					<li class="nav-kontakt">
						<Link to={"/kontakt"}>Kontakt</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Navbar;
