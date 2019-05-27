import React, { Component } from 'react';
import './CommentSection.css';
import { Consumer } from '../../dummy-data';
import CommentInput from './CommentInput';
import CommentList from './CommentList';

const clickHandler = event => {
  event.preventDefault();
};

class AddComment extends Component {
  render() {
    const { timestamp, comment, errors } = this.state;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="commentArea">
              <CommentList comments={this.props.comments} />
              <p>{timestamp}</p>
              <div>
                <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                  <CommentInput
                    name="comment"
                    placeholder="Enter comment.."
                    value={comment}
                    onChange={this.onChange}
                    error={errors.comment}
                  />
                  <button
                    onClick={clickHandler}
                    value={'Add Comment'}
                    type="submit"
                  >
                    Add Button..
                  </button>
                </form>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default AddComment;
