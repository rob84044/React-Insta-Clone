import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import CommentSection from '../CommentSection/CommentSection';

import { Consumer } from '../../dummy-data';

class Post extends Component {
  render() {
    const { uname, thumbNail, imageUrl, likes, comments } = this.props.post;
    return (
      <Consumer>
        {() => {
          return (
            <div className="outer-body">
              <div className="aboutUser">
                <img className="userPic" src={thumbNail} alt="User Image" />
                <p className="userName">{uname}</p>
              </div>
              <div className="largePic">
                <img className="postPic" src={imageUrl} alt="Post Image" />
              </div>
              <div className="userActions">
                <i className="far fa-heart" />
                <i className="far fa-comment" />
              </div>
              <div className="impact">
                <p className="likes"> {likes}</p>
              </div>
              <div className="commentSection">
                <CommentSection comments={comments} />
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default Post;
