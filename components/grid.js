import React, { Component } from 'react'

import {Responsive, WidthProvider} from 'react-grid-layout';
const ResponsiveReactGridLayout = WidthProvider(Responsive);

import './grid.less'

class DashboardGrid extends Component {
  render () {
    let responsiveLayouts = {
      lg: [
        {i:'logo', w: 2, h: 2, x: 0, y: 0},
        {i:'city', w: 3, h: 1, x: 2, y: 0},
        {i:'clock', w: 3, h: 1, x: 2, y: 1},
        {i:'country', w: 3, h: 4, x: 5, y: 0},
        {i:'flights', w: 3, h: 2, x: 0, y: 3},
        {i:'countries', w: 2, h: 2, x: 3, y: 3},
      ]
    };
    let breakpoints = {lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0};
    let cols = {lg: 16, md: 12, sm: 8, xs: 6, xxs: 2};

    return (
      <ResponsiveReactGridLayout
        className="layout"
        cols={cols}
        rowHeight={90}
        breakpoints={breakpoints}
        layouts={responsiveLayouts}
        >
        <div key={'logo'} className={'test'}>
          <span className="text">Logo</span>
        </div>
        <div key={'city'} className={'test'}>
          <span className="text">City</span>
        </div>
        <div key={'clock'} className={'test'}>
          <span className="text">Clock</span>
        </div>
        <div key={'country'} className={'test'}>
          <span className="text">Country</span>
        </div>
        <div key={'flights'} className={'test'}>
          <span className="text">Flights</span>
        </div>
        <div key={'countries'} className={'test'}>
          <span className="text">Countries Visited</span>
        </div>
      </ResponsiveReactGridLayout>
    )
  }
};

export default DashboardGrid
