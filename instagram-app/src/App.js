import React, { Component } from 'react';
import './App.css';
import PostPage from './components/PostContainer/PostPage';
import withAuthenticate from '../src/components/authentication/withAuthenticate';

class App extends Component {
  render() {
    const ComponentFromWithAuthenticate = withAuthenticate(PostPage);
    return [<ComponentFromWithAuthenticate />];
  }
}

export default App;
