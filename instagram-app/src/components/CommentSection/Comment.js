import React from 'react';
import PropTypes from 'prop-types';
import './CommentSection.css';

const Comment = props => {
  return (
    <div className="comment-text">
      <p className="user">
        <span className="bold">{props.comment.username}</span>
        {props.comment.text}
      </p>
    </div>
  );
};

Comment.propTypes = {
  comment: PropTypes.shape({
    text: PropTypes.string,
    username: PropTypes.string
  })
};

export default Comment;
