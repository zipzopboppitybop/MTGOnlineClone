import React from 'react';
import { useState } from 'react';
import './SearchBar.css';

function MainSearchBar(){
    const [query, setQuery] = useState('');

    const handleSearch = () => {
        window.location.href = `/search/decks/?query=${query}`;
    };

	return (
        <div className='main-searchbar-div'>
            <input  
                className='main-searchbar' 
                type="text" 
                placeholder="Search for cards, decks, and users"
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

export default MainSearchBar;