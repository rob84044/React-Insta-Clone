import React from 'react';

const CommentInput = ({
  label,
  name,
  value,
  placeholder,
  type,
  addComment
}) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        className="submit-comment"
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={addComment}
      />
    </div>
  );
};
export default CommentInput;
