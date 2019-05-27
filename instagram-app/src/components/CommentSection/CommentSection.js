import React, { Component } from 'react';
import './CommentSection.css';
import CommentInput from './CommentInput';
import Comment from './Comment';

class CommentSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: this.props.comments,
      comment: ''
    };
  }

  componentDidMount() {
    const id = this.props.postId;
    if (localStorage.getItem(id)) {
      this.setState({
        comments: JSON.parse(localStorage.getItem(this.props.postId))
      });
    }
  }
  commentHandler = event => {
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
    console.log(this.state);

    return (
      <div className="commentArea">
        {this.state.comments.map((comment, index) => (
          <Comment comment={comment} key={index} />
        ))}

        <p>{timestamp}</p>
        <div>
          <form onSubmit={this.addComment}>
            <CommentInput
              submitcomment={this.addComment}
              changecomment={this.commentHandler}
              comment={this.state.comment}
            />
          </form>
        </div>
      </div>
    );
  }
}

export default CommentSection;
