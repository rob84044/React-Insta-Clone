import React, { Component } from 'react';
import './CommentSection.css';
import CommentInput from './CommentInput';
import Comment from './Comment';
import dummyData from '../../dummy-data';

const defaultState = {
  posts: dummyData,
  text: ''
};

class CommentSection extends Component {
  constructor(props) {
    super(props);
    this.state = defaultState;
  }

  componentDidMount() {
    const id = this.props.postId;
    if (localStorage.getItem(id)) {
      this.setState({
        comments: JSON.parse(localStorage.getItem(this.props.postId))
      });
    }
  }
  comment = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  addComment = e => {
    e.preventDefault();
    const newComment = { text: this.state.comment, username: 'ReactIsHard' };
    const comments = this.state.comments.slice();
    comments.push(newComment);
    this.setState({ comments, comment: '' });
  };

  render() {
    const { timestamp, comment } = this.state;

    return (
      <div className="commentArea">
        <Comment comments={this.props.comments} />
        <p>{timestamp}</p>
        <div>
          <form onSubmit={this.addComment}>
            <CommentInput
              name="comment"
              placeholder="Enter comment.."
              value={comment}
              addComment={this.addComment}
            />
          </form>
        </div>
      </div>
    );
  }
}

export default CommentSection;
