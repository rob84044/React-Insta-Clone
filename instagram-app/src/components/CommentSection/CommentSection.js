import React from 'react';
import uuid from 'uuid';
import './CommentSection.css';

const clickHandler = event => {
  event.preventDefault();
};

const CommentSection = props => {
  const { comments, timestamp } = props;
  return (
    <div className="commentArea">
      {comments.map(comment => (
        <p className="breathingSpace" key={uuid.v4()}>
          {' '}
          <strong>{comment.username}</strong> {comment.text}
        </p>
      ))}
      <p>{timestamp}</p>
      <div>
        <form name="submitComment" className="submitComment">
          <input
            className="addCommentField"
            type="text"
            placeholder="Add a comment..."
          />
          <button onClick={clickHandler} type="submit">
            Add comment
          </button>
        </form>
      </div>
    </div>
  );
};

export default CommentSection;
