// components/SearchBar.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import motors from "../arrays/motors";
import './components-styling/SearchBar.css';



function SearchBar({ placeholder }) {
    const [query, setQuery] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const input = e.target.value;
        setQuery(input);

        if (input.trim() === '') {
            setSuggestions([]);
            return;
        }

     // Split the query into terms (e.g., "BMW G80" -> ["bmw", "g80"])
     const searchTerms = input.toLowerCase().split(/\s+/);

     // Filter motors where ALL search terms match part of the motor fields
     const filtered = motors.filter(motor => {
         const combinedFields = [
             motor.manufacturer.toLowerCase(),
             motor.name.toLowerCase(),
             ...motor.cars.map(car => car.toLowerCase())
         ].join(' ');
 
         // Check if every search term is found in the combined fields
         return searchTerms.every(term => combinedFields.includes(term));
     });
    
        setSuggestions(filtered);
    };

    const handleSuggestionClick = (id) => {
        navigate(`/motor/${id}`);
        setQuery('');
        setSuggestions([]);
    };

    const handleSearchClick = () => {
        if (query.trim() !== '') {
            const firstSuggestion = suggestions[0];
            if (firstSuggestion) {
                navigate(`/motor/${firstSuggestion.id}`);
                setQuery('');
                setSuggestions([]);
            }
        }
    };
    

    return (
        <div className="hero-search">
            <label htmlFor="search-id" className="hero-label">
                <input
                    id="search-id"
                    className="searchInput"
                    autoComplete="off"
                    placeholder={placeholder || "Search Motor or Car Name"}
                    value={query}
                    onChange={handleInputChange}
                />
                <button className="searchButton" onClick={handleSearchClick}>
                    <i className="ri-search-line"></i>
                </button>
            </label>
            {suggestions.length > 0 && (
                <ul className="suggestions-dropdown">
                    {suggestions.map(motor => (
                        <li
                            key={motor.id}
                            onClick={() => handleSuggestionClick(motor.id)}
                            className="suggestion-item"
                        >
                            ({motor.manufacturer}) 
                            {/*  &nbsp; Blank space */}
                            {motor.name}
                            
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default SearchBar;
