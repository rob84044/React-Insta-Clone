import React, { Component } from 'react';
// import PropTypes from 'prop-types';

// class SearchBar extends Component {
//   static propTypes = {
//     //Use this area to verify prop data from app.js file
//   };
const SearchBar = () => {
  return (
    <div className="searchBar">
      <div className="left">
        <div className="fa-insta-logo">
          <p>Im an instagram logo</p>
        </div>
        <div className="bar">im a bar</div>
        <div className="insta-name">Instagram</div>
      </div>
      <div className="center">
        <div className="search">
          <input placeholder="mag Glass search" type="text" />
        </div>
      </div>
      <div className="right">
        <div className="compass">compass</div>
        <div className="heart">heart</div>
        <div className="person-img">person</div>
      </div>
    </div>
  );
};
export default SearchBar;
