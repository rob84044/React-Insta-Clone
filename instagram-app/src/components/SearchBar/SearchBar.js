import React from 'react';
import logo from '../assets/instaIcon.png';
import './SearchBar.css';

const SearchBar = props => {
  return (
    <div className="searchBar">
      <div className="subBar">
        <div className="left">
          <i className="fab fa-instagram fa-2x" />
          <div className="bar">&#124;</div>

          <img className="name" src={logo} alt="Instagram Logo" />
        </div>
        <div className="center">
          <form onSubmit={props.find} className="search">
            <input
              className="searchable"
              placeholder="search"
              value={props.search}
              onChange={props.change}
              type="text"
            />

            <button className="searchButton" onSubmit={props.find}>
              &#128269;
            </button>
          </form>
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
