import React from 'react';
import { useState } from 'react';
import './SearchBar.css';

function UserSearchBar(){
    const [query, setQuery] = useState('');
    let placeholder = "Deck name...";
    const handleSearch = () => {
        window.location.href = `/search/decks/?query=${query}`;
    };

    if ( !window.location.href.includes("/search/decks/") ) placeholder = "Search for cards, decks, and users";

	return (
        <div className='main-searchbar-div'>
            <input  
                className='main-searchbar' 
                type="text" 
                placeholder={placeholder}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                        handleSearch();
                    }
                }}
                 /> 
            <i className="fas fa-search profile-icon" />
        </div>
	);
}

export default UserSearchBar;