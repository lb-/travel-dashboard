import React, { Component } from 'react';
import { prefixLink } from 'gatsby-helpers';
import './logo.less';

class Logo extends Component {
  render () {
    const logoStyle = {
      backgroundImage: 'url(' + prefixLink('/images/logo.svg') + ')',
    }
    return (
      <div className="contains-logo">
        <div className="logo" style={logoStyle}>
          <a className="button is-small is-link" href="https://lb.ee">by lb.ee</a>
        </div>
      </div>
    )
  }
};

export default Logo
