import React, { Component } from 'react';
import Post from './Post';
import './PostContainer.css';
import { Consumer } from '../../dummy-data';
import PropTypes from 'prop-types';

class PostContainer extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          const { dummyData } = value;
          console.log(dummyData, value);
          return (
            <div className="fullPost">
              {dummyData.map(post, index => (
                <Post key={post.timestamp} index={index} post={post} />
              ))}
            </div>
          );
        }}
      </Consumer>
    );
  }
}

PostContainer.propTypes = {
  username: PropTypes.string,
  thumbnailUrl: PropTypes.string,
  imageUrl: PropTypes.string,
  likes: PropTypes.string,
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      username: PropTypes.string,
      text: PropTypes.string
    })
  )
};

export default PostContainer;
