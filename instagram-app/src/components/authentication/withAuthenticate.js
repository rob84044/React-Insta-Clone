import React from 'react';

const withAuthenticate = Component =>
  class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        //Placeholder
      };
    }
    render() {
      return (
        <React.Fragment>
          <Component />
        </React.Fragment>
      );
    }
  };

export default withAuthenticate;
