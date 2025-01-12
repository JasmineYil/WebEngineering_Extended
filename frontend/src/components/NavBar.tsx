import React from 'react';

const NavBar: React.FC = () => (
  <div className="nav">
    <ul>
      <li>
        <a href="#">Home</a>
      </li>
      <li>
        <a href="#">Our team</a>
      </li>
      <li>
        <a href="#">Projects</a>
      </li>
      <li>
        <a href="#">Blog</a>
      </li>
    </ul>

    <form className="search">
      <label htmlFor="search-query" className="sr-only">
        Search our website
      </label>
      <input
        type="search"
        name="q"
        id="search-query"
        placeholder="Search query"
      />
      <button type="submit" className="search-button">
        Go!
      </button>
    </form>
  </div>
);

export default NavBar;
