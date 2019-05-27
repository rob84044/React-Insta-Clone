import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Consumer } from '../../dummy-data';
import uuid from 'uuid';

const Comment = props => {
  return (
    <p className="breathingSpace" key={uuid.v4()}>
      {' '}
      <strong>{props.comment.username}</strong> {props.comment.text}
    </p>
  );
};

class CommentList extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Consumer>
        {value => {
          console.log(value);
          const { comments } = this.props;
          return (
            <React.Fragment>
              {comments.map(comment => (
                <Comment key={uuid.v4()} comment={comment} />
              ))}
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}

Comment.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      username: PropTypes.string,
      text: PropTypes.string
    })
  )
};
export default CommentList;
