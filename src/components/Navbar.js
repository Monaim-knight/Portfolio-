import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
	return (
		<header className="header">
			<div className="container">
				<div className="header-top" style={{ justifyContent: 'center', flexDirection: 'column', gap: 12 }}>
					<h1 className="name" style={{ margin: 0, textAlign: 'center' }}>
						<Link to="/" className="linkedin-link" style={{ textDecoration: 'none' }}>Islam Md Monaim</Link>
					</h1>
					<nav style={{ display: 'flex', gap: 16, justifyContent: 'center' }}>
						<NavLink to="/" className="linkedin-link">Portfolio</NavLink>
						<NavLink to="/research" className="linkedin-link">Research</NavLink>
						<NavLink to="/research/new" className="linkedin-link">New Post</NavLink>
					</nav>
				</div>
			</div>
		</header>
	);
};

export default Navbar;


