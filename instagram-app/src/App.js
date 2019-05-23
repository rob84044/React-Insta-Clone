import React from 'react';
// import logo from './components/assets/logo.svg';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
// import PostContainer from './components/PostContainer/PostContainer';
import { Provider } from './dummy-data';

function App() {
  return (
    <Provider>
      <div className="app">
        <SearchBar />
        {/* <PostContainer /> */}
      </div>
    </Provider>
  );
}

export default App;
