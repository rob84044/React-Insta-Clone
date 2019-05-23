import React from 'react';
import logo from '../assets/instaIcon.png';
import './SearchBar.css';

const SearchBar = () => {
  return (
    <div className="searchBar">
      <div className="subBar">
        <div className="left">
          <i className="fab fa-instagram fa-2x" />
          <div className="bar">&#124;</div>

          <img className="name" src={logo} alt="Instagram Logo" />
        </div>
        <div className="center">
          <div className="search">
            <input
              className="searchable"
              placeholder="&#128269; search"
              type="text"
            />
          </div>
        </div>
        <div className="right">
          <div className="compass">
            <i className="far fa-compass fa-2x" />
          </div>
          <div className="heart">
            <i className="far fa-heart fa-2x" />
          </div>
          <div className="person-img">
            <i className="far fa-user fa-2x" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default SearchBar;
