import React, { Component } from 'react';

class Footer extends Component {
  render () {
    return (

      <footer className="footer">
        <div className="container">
          <div className="content has-text-centered">
            <p>
              Made by LB with&nbsp;
              <a href="https://github.com/gatsbyjs/gatsby">Gatsby</a>,&nbsp;
              <a href="http://bulma.io/">Bulma</a> and&nbsp;
              <a href="https://github.com/STRML/react-grid-layout">React Grid Layout</a>.
              Hosted on Github Pages.
            </p>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
