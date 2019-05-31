import React, { Component } from 'react';
import './PostContainer.css';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import customParseFormat from 'dayjs/plugin/customParseFormat';

import CommentSection from '../CommentSection/CommentSection';

dayjs.extend(customParseFormat);
dayjs.extend(relativeTime);

// const UserSupplied = props => {
//   const { thumbnailUrl, username } = props.Post;

//   return (
//     <div className="userSupplied">
//       <div className="USWrapper">
//         <img
//           alt="Image provided by user"
//           className="US-thumb"
//           src={thumbnailUrl}
//         />
//       </div>
//       <div>{username}</div>
//     </div>
//   );
// };

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: props.post.likes
    };
  }
  loveIt = () => {
    this.setState(prevState => {
      return { likes: prevState.likes + 1 };
    });
  };
  render() {
    const {
      username,
      thumbnailUrl,
      imageUrl,
      likes,
      comments,
      timestamp
    } = this.props.post;
    console.log(this.props);
    const time = dayjs(timestamp, 'MMMM Do YYYY, h:m:s a');

    return (
      <div className="masterPost">
        <div className="outer-body">
          <div className="userSupplied">
            <div className="USWrapper">
              <img
                alt="provided by user"
                className="US-thumb"
                src={thumbnailUrl}
                className="thumb"
              />{' '}
              <div className="username">
                <strong> {username}</strong>
              </div>
            </div>
          </div>
          <div className="largePic">
            <img className="postPic" src={imageUrl} alt="Post " />
          </div>
          <div className="userActions">
            <div className="placeholder">
              <i className="far fa-heart fa-2x p" onClick={this.loveIt} />
              <i className="far fa-comment fa-2x b" />
            </div>
          </div>
          <div className="impact">
            <p className="likes">
              {' '}
              <strong>{this.state.likes} likes</strong>
            </p>
          </div>
          <div className="commentBlock">
            <CommentSection
              comments={comments}
              timestamp={time.fromNow()}
              postIndex={this.props.index}
              postId={this.props.post.imageUrl}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Post;
