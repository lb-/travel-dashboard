import React, { Component } from 'react';
import './logo.less';

class Logo extends Component {
  render () {
    return (
      <div className="contains-logo">
        <div className="logo">
          <a className="button is-small is-link" href="https://lb.ee">by lb.ee</a>
        </div>
      </div>
    )
  }
};

export default Logo
