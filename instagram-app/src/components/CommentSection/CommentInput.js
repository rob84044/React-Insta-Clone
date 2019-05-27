import React from 'react';

const CommentInput = props => {
  return (
    <div className="form-group">
      <input
        type="text"
        className="submit-comment"
        placeholder="Add Comment..."
        name="comment"
        submitcomment={props.submitcomment}
        onChange={props.changecomment}
      />
    </div>
  );
};

CommentInput.defaultProp = {
  type: 'text'
};
export default CommentInput;
