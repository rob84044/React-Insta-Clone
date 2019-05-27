import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './CommentSection.css';

class Comment extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { comments } = this.props;
    console.log(comments, 'Comment.js');
    return (
      <div className="comment-text">
        <span className="comment">{comments.text}</span>{' '}
        <span className="user">-{comments.username}</span>
      </div>
    );
  }
}

Comment.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      username: PropTypes.string,
      text: PropTypes.string
    })
  )
};

export default Comment;
