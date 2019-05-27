import React, { Component } from 'react';
import Post from './Post';
import './PostContainer.css';
import PropTypes from 'prop-types';
import uuid from 'uuid';

class PostContainer extends Component {
  render() {
    return (
      <div className="posts-container-wrapper">
        {this.props.posts.map(post => (
          <Post key={uuid} post={post} />
        ))}
      </div>
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
