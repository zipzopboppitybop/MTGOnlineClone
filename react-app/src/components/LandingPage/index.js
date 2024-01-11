import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './LandingPage.css';

function LandingPage(){
	const sessionUser = useSelector(state => state.session.user);

	return (
        <h1>Hello</h1>
	);
}

export default LandingPage;