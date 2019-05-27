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
  // constructor(props) {
  //   super(props);
  // }
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
      <div>
        <div className="outer-body">
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
          {/* <UserSupplied username={username} thumbnailUrl={thumbnailUrl} /> */}
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
              postIndex={this.props.index}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Post;
