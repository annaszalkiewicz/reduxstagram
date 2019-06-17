import React, { Component } from 'react';
import { Link } from 'react-router';

class Main extends Component {
  render() {
    return(
      <React.Fragment>
        <h1>
          <Link to="/">Reduxstagram</Link>
        </h1>
        {React.cloneElement(this.props.children, this.props)}
      </React.Fragment>
    )
  }
}

export default Main;