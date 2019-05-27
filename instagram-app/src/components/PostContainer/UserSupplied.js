import React from 'react';
import './Posts.css';

const PostHeader = () => {
  return (
    <div className="userSupplied">
      <div className="USWrapper">
        <img
          alt="Image provided by user"
          className="US-thumb"
          src={thumbnailUrl}
        />
      </div>
      <div>{username}</div>
    </div>
  );
};

export default PostHeader;
