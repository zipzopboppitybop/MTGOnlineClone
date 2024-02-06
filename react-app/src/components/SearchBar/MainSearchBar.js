import React from 'react';
import { useState } from 'react';
import './SearchBar.css';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';

function MainSearchBar(){
    const [query, setQuery] = useState('');
    let placeholder = "Deck name...";
    const handleSearch = () => {
        window.location.href = `/search/decks/?query=${query}`;
    };
    const ulClassName = "search-query-list" + (query? "" : " hidden");

    if ( !window.location.href.includes("/search/decks/") ) placeholder = "Search for cards, decks, and users";

	return (
        <>
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
            <ul className={ulClassName}>  
                <NavLink to={`/search/decks/?query=${query}`}>
                    <li className='search-query-list-item border-bottom'>Search Decks: {query} <span className='default'>Default</span></li>
                </NavLink>
                
                <li className='search-query-list-item border-bottom border-top'>Search Cards: {query}</li>
                <li className='search-query-list-item border-top'>Search Users: {query}</li>
            </ul>
        </>

	);
}

export default MainSearchBar;