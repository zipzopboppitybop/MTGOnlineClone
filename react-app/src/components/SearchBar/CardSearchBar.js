import React from 'react';
import { useState } from 'react';
import './SearchBar.css';

function CardSearchBar(){
    const [query, setQuery] = useState('');
    const handleSearch = () => {
        window.location.href = `/search/cards/?query=${query}/?page=1`;
    };

	return (
        <>
            <div className='main-searchbar-div'>
                <input  
                    className='main-searchbar' 
                    type="text" 
                    placeholder="Card name..."
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

export default CardSearchBar;