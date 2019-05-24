import React from 'react';
import uuid from 'uuid';
import './CommentSection.css';

const CommentSection = props => {
  const { comments } = props;
  return (
    <div className="commentArea">
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
