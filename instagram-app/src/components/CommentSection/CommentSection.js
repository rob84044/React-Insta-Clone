import React, { Component } from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid';

const CommentSection = props => {
  const { comments } = props;
  return (
    <div>
      {comments.map(comment => (
        <p key={uuid.v4()}>
          {' '}
          <strong>{comment.username}</strong> {comment.text}
        </p>
      ))}
    </div>
  );
};

export default CommentSection;
