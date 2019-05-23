import React, { Component } from 'react';
// import logo from './components/assets/logo.svg';
import dummyData from './dummy-data';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';

class App extends Component {
  state = {
    allPosts: dummyData
  };
  render() {
    return (
      <div className="app">
        <SearchBar />
        <PostContainer allPosts={this.state.allPosts} />

        <i className="fa fa-thumbs-up" />
      </div>
    );
  }
}

export default App;
