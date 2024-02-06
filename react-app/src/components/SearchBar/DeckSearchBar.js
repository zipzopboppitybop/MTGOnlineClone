import React from 'react';
import { useState } from 'react';
import './SearchBar.css';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';

function DeckSearchBar(){
    const [query, setQuery] = useState('');
    const handleSearch = () => {
        window.location.href = `/search/decks/?query=${query}`;
    };
    const ulClassName = "search-query-list" + (query? "" : " hidden");

	return (
        <>
            <div className='main-searchbar-div'>
                <input  
                    className='main-searchbar' 
                    type="text" 
                    placeholder="Deck name..."
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
        </>

	);
}

export default DeckSearchBar;