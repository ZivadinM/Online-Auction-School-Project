/** @format */

import { useState } from "react";
import logo from "../assets/logo.png";
import "../App.css";
const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleDropdown = () => {
		setIsOpen(!isOpen);
	};

	return (
		<nav className='about'>
			<div className='Logo Logo1'>
				<img src={logo} alt='' />
				<a href='/home'>Auction</a>
			</div>
			<div className={`nav-wraper ${isOpen ? "open" : ""}`}>
				<div className='Logo Logo2'>
					<img src={logo} alt='' />
					<a href=''>Auction</a>
				</div>
				<div className='dropdown' onClick={toggleDropdown}>
					<div className='barsite'></div>
					<div className='barsite'></div>
					<div className='barsite'></div>
				</div>
				<h3>
					<a href='/home'>Početna</a>
				</h3>
				<h3>
					<a href='/english'>Engleska</a>
				</h3>
				<h3>
					<a href='/dutch'>Holandska</a>
				</h3>
				<h3>
					<a href='/panny'>Peni</a>
				</h3>
				<h3>
					<a href='/vickrey'>Vikrijeva</a>
				</h3>
				<h3>
					<a href='/amazon'>Amazon</a>
				</h3>
				<h3>
					<a href='/ebay'>Ebay</a>
				</h3>
				<h3>
					<a href='/aboutus'>O nama</a>
				</h3>
			</div>
			<div
				className={`dropdown ${isOpen ? "test" : ""}`}
				onClick={toggleDropdown}
			>
				<div className='barsite'></div>
				<div className='barsite'></div>
				<div className='barsite'></div>
			</div>
		</nav>
	);
};

export default Navbar;
