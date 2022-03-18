import React from "react";


const SearchCity = ({ location, searchLocation, searchChange }) => {
   
    return (
        <div className="search">
            <input 
            type="text"
            value={location}
            onChange={searchChange}
            onKeyPress={searchLocation}
            placeholder="Enter Location" />
        </div>
    );
}

export default SearchCity;