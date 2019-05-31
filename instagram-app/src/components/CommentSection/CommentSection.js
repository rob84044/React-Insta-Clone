import React, { Component } from 'react';
import './CommentSection.css';
import CommentInput from './CommentInput';
import Comment from './Comment';

class CommentSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: this.props.comments,
      comment: '',
      username: localStorage.getItem('user')
    };
    this.fetchData = this.fetchData.bind(this);
    this.saveData = this.saveData.bind(this);
  }

  componentDidMount() {
    window.addEventListener('load', this.fetchData);
    window.addEventListener('unload', this.saveData);
  }
  componentWillUnmount() {
    window.addEventListener('load', this.fetchData);
    window.addEventListener('unload', this.saveData);
  }

  saveData() {
    localStorage.setItem(
      this.props.postIndex,
      JSON.stringify(this.state.comments)
    );
  }

  fetchData() {
    const persistedData = localStorage.getItem(this.props.postIndex);
    if (persistedData !== null) {
      this.setState({
        comments: JSON.parse(persistedData)
      });
    } else {
      this.setState({
        comments: this.props.comments
      });
    }
  }

  commentHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  addComment = e => {
    e.preventDefault();
    const newComment = {
      text: this.state.comment,
      username: this.state.username
    };
    const comments = this.state.comments.slice();
    comments.push(newComment);
    this.setState({ comments, comment: '' });
  };

  render() {
    const { timestamp } = this.state;
    console.log(this.props, 'commentsection');

    return (
      <div className="commentArea">
        {this.state.comments.map((comment, index) => (
          <Comment comment={comment} key={index} />
        ))}

        <p>{timestamp}</p>
        <div className="addtext">
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
