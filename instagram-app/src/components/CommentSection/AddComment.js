import React, { Component } from 'react';
import uuid from 'uuid';
import './CommentSection.css';
import { Consumer } from '../../dummy-data';
import CommentInput from './CommentInput';
import CommentList from './CommentList';

const clickHandler = event => {
  event.preventDefault();
};

class AddComment extends Component {
  state = {
    comment: '',
    errors: {}
  };
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (dispatch, e) => {
    e.preventDefault();
    const { comment } = this.state;

    if (comment === '') {
      this.setState({
        errors: { comment: 'Are you sure you typed something?' }
      });
      return;
    }

    const newComment = {
      id: uuid(),
      comment,
      errors: {}
    };
    dispatch({ type: 'ADD_COMMENT', payload: newComment });

    this.setState({
      comment: ''
    });
  };
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
