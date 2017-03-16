import React from 'react';
import Headroom from 'react-headroom';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';
import Helmet from 'react-helmet';
import { config } from 'config';

import "../node_modules/react-grid-layout/css/styles.css";
import "../node_modules/react-resizable/css/styles.css";
import '../css/main';

import DashboardGrid from '../components/DashboardGrid';
import Footer from '../components/Footer';


module.exports = React.createClass({
  propTypes () {
    return {
      children: React.PropTypes.any,
    }
  },
  render () {
    return (
      <div>
        <Helmet
          title={config.siteTitle}
          meta={[
            {"name": "description", "content": "Travel Dashboard"},
            {"name": "keywords", "content": "travel, dashboard"},
          ]}
        />
        <DashboardGrid />
        <Footer />
        {this.props.children}
      </div>
    )
  },
})
