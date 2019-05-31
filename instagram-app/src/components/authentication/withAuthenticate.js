import React from 'react';

const withAuthenticate = Component =>
  class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        LoggedIn: false
      };
    }
    componentDidMount() {
      if (!localStorage.getItem('user')) {
        this.setState({ loggedIn: false });
      } else {
        this.setState({ loggedIn: true });
      }
    }

    render() {
      if (this.state.loggedIn) return <PostsPage />;
      return <LoginPage />;
    }
  };

export default withAuthenticate;
