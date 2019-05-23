import React, { Component } from 'react';
import Post from './Post';
import CommentSection from '../CommentSection/CommentSection';
import { Consumer } from '../../dummy-data';

class PostContainer extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          const { dummyData } = value;
          console.log(dummyData, value);
          return (
            <React.Fragment>
              {dummyData.map(post => (
                <Post key={post.timestamp} post={post} />
              ))}
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}

export default PostContainer;
