
import { Container } from 'react-responsive-grid'
import Headroom from 'react-headroom'
import '../css/markdown-styles';
import { rhythm } from '../utils/typography'


// want to keep

import React from 'react';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';
import Helmet from 'react-helmet';
import { config } from 'config';

import "../node_modules/react-grid-layout/css/styles.css";
import "../node_modules/react-resizable/css/styles.css";

import DashboardGrid from '../components/DashboardGrid';


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
            {"name": "description", "content": "Sample"},
            {"name": "keywords", "content": "sample, something"},
          ]}
        />
        <DashboardGrid />
        {this.props.children}
      </div>
    )
  },
})
