import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import Footer from '../Footer';
import './Navigation.css';

function Navigation({ isLoaded }){
	const sessionUser = useSelector(state => state.session.user);

	return (
		<>
			<ul id='nav-bar'>
				<li id='logo'>
					<NavLink exact to="/">Primal Spiral</NavLink>
				</li>
				{isLoaded && (
					<li>
						<ProfileButton user={sessionUser} />
					</li>
				)}
			</ul>
			<div className='footer'>
			<Footer  />
			</div>
			
		</>
	);
}

export default Navigation;