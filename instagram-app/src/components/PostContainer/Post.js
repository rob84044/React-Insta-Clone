import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import AddComment from '../CommentSection/CommentSection';
import './PostContainer.css';
import { Consumer } from '../../dummy-data';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import customParseFormat from 'dayjs/plugin/customParseFormat';

dayjs.extend(customParseFormat);
dayjs.extend(relativeTime);

class Post extends Component {
  render() {
    const {
      username,
      thumbnailUrl,
      imageUrl,
      likes,
      comments,
      timestamp
    } = this.props.post;
    const time = dayjs(timestamp, 'MMMM Do YYYY, h:m:s a');
    return (
      <Consumer>
        {() => {
          return (
            <div className="outer-body">
              <div className="aboutUser">
                <img className="userPic" src={thumbnailUrl} alt="User " />
                <p className="userName">
                  <strong>{username}</strong>{' '}
                </p>
              </div>
              <div className="largePic">
                <img className="postPic" src={imageUrl} alt="Post " />
              </div>
              <div className="userActions">
                <div className="placeholder">
                  <i className="far fa-heart fa-lg b" />
                  <i className="far fa-comment fa-lg b" />
                </div>
              </div>
              <div className="impact">
                <p className="likes">
                  {' '}
                  <strong>{likes} likes</strong>
                </p>
              </div>
              <div className="commentBlock">
                <CommentSection
                  comments={comments}
                  timestamp={time.fromNow()}
                  postIndex={props.index}
                />
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default Post;
