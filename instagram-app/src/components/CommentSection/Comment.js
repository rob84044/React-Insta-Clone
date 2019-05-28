import React from 'react';
import PropTypes from 'prop-types';
import './CommentSection.css';

const Comment = props => {
  return (
    <div className="comment-text">
      <div className="username">
        <p className="user">{props.comment.username}</p>
      </div>
      <div className="comment">
        <p className="commentP">{props.comment.text}</p>
      </div>
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
