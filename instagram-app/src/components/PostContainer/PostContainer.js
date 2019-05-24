import React, { Component } from 'react';
import Post from './Post';
import './PostContainer.css';
import { Consumer } from '../../dummy-data';

class PostContainer extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          const { dummyData } = value;
          console.log(dummyData, value);
          return (
            <div className="fullPost">
              {dummyData.map(post => (
                <Post key={post.timestamp} post={post} />
              ))}
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default PostContainer;
