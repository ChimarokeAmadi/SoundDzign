import React, { useState } from "react";
import "./Navbar.css";
import menuIcon from "../../assets/menu-icon.svg";
import closeIcon from "../../assets/close-icon.svg";
const Navbar = () => {
	const [isActive, setIsActive] = useState(false);

	const menuClick = () => {
		setIsActive(true);
	};

	const menuClose = () => {
		setIsActive(false);
	};

	return (
		<>
			<nav>
				<a href='#' className='logo'>
					Sound<span className='red-text'>Dzign</span>
				</a>
				<ul>
					<li>
						<a href='#topics'>Course Details</a>
					</li>
					<li>
						<a href='#info'>About</a>
					</li>
					<li>
						<a href='#blog'>Blog</a>
					</li>
					<li>
						<a href='#testimonials'>Testimonials</a>
					</li>
				</ul>

				<div className='menu-icon' onClick={menuClick}>
					<img src={menuIcon} alt='' />
				</div>
			</nav>
			<div className={`mobile-menu ${isActive ? "active" : ""}`}>
				<div className='close-icon' onClick={menuClose}>
					<img src={closeIcon} alt='' />
				</div>

				<ul>
					<li onClick={menuClose}>
						<a href='#topics' className='mt-0'>
							Course Details
						</a>
					</li>
					<li onClick={menuClose}>
						<a href='#info'>About</a>
					</li>
					<li onClick={menuClose}>
						<a href='#blog'>Blog</a>
					</li>
					<li onClick={menuClose}>
						<a href='#testimonials' className='mb-0'>
							Testimonials
						</a>
					</li>
				</ul>
			</div>
		</>
	);
};

export default Navbar;
