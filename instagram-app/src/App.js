import React, { Component } from 'react';
import './App.css';
import PostPage from './components/PostContainer/PostPage';
import withAuthenticate from '../src/components/authentication/withAuthenticate';
import Login from '../src/components/login/Login';

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div className="App">
        <ComponentFromWithAuthenticate />;
      </div>
    );
  }
}

const ComponentFromWithAuthenticate = withAuthenticate(PostPage)(Login);
export default App;
