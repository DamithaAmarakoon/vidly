import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
	return (
		<nav className='navbar navbar-expand-md navbar-dark bg-dark'>
			<div className='container'>
				<span className='navbar-brand'>Vidly</span>

				<ul className='navbar-nav ml-auto'>
					<li className='nav-item'>
						<NavLink to='/movies' className='nav-link'>
							Movies
						</NavLink>
					</li>
					<li className='nav-item'>
						<NavLink to='/customers' className='nav-link'>
							Customers
						</NavLink>
					</li>
					<li className='nav-item'>
						<NavLink to='/rentals' className='nav-link'>
							Rentals
						</NavLink>
					</li>
					<li className='nav-item'>
						<NavLink to='/login' className='nav-link'>
							Login
						</NavLink>
					</li>
					<li className='nav-item'>
						<NavLink to='/register' className='nav-link'>
							Register
						</NavLink>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
