import React from 'react';
import './SearchBar.css';

function MainSearchBar(){
	return (
        <div className='main-searchbar-div'>
            <input className='main-searchbar' type="text" placeholder="Search for cards, decks, users, etc..." /> 
            <i className="fas fa-search profile-icon" />
        </div>
	);
}

export default MainSearchBar;