import React, { useState } from 'react';

const SearchModel = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleSearchModel = () => {
    setIsOpen(!isOpen);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className={`search-model ${isOpen ? 'active' : ''}`}>
      <div className="h-100 d-flex align-items-center justify-content-center">
        <div className="search-close-switch" onClick={toggleSearchModel}>+</div>
        <form className="search-model-form">
          <input
            type="text"
            id="search-input"
            placeholder="Search here....."
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </form>
      </div>
    </div>
  );
};

export default SearchModel;
