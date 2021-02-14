import React from 'react';

const Search = (props) => {
    return (
        <input
          name="searchTerm"
          className="input mt-6 mb-6"
          type="text"
          placeholder="Search by Name"
          onChange={props.handleInputChange}
        />
    );
};

export default Search;