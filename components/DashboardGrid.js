import React, { Component } from 'react'

import {Responsive, WidthProvider} from 'react-grid-layout';
const ResponsiveReactGridLayout = WidthProvider(Responsive);

import Logo from '../components/Logo';
import './dashboardgrid.less';

class DashboardGrid extends Component {
  render () {
    let responsiveLayouts = {
      lg: [
        {i:'logo', w: 2, h: 2*3, x: 0, y: 0},
        {i:'city', w: 3, h: 1*3, x: 2, y: 0},
        {i:'clock', w: 3, h: 1*3, x: 2, y: 1},
        {i:'country', w: 3, h: 4*3, x: 5, y: 0},
        {i:'flights', w: 3, h: 2*3, x: 0, y: 3},
        {i:'countries', w: 2, h: 2*3, x: 3, y: 3},
      ],
      md: [
        {i:'logo', w: 2, h: 2*2.5, x: 0, y: 0},
        {i:'city', w: 3, h: 1*2.5, x: 2, y: 0},
        {i:'clock', w: 3, h: 1*2.5, x: 2, y: 1},
        {i:'country', w: 3, h: 4*2.5, x: 5, y: 0},
        {i:'flights', w: 3, h: 2*2.5, x: 0, y: 3},
        {i:'countries', w: 2, h: 2*2.5, x: 3, y: 3},
      ],
      sm: [
        {i:'logo', w: 1.5, h: 3, x: 0, y: 0},
        {i:'city', w: 2.5, h: 3, x: 1.5, y: 0},
        {i:'clock', w: 2.5, h: 3, x: 1.5, y: 3},
        {i:'country', w: 2, h: 9, x: 5, y: 0},
        {i:'countries', w: 1.5, h: 3, x: 0, y: 3},
        {i:'flights', w: 4, h: 3, x: 0, y: 7},
      ],
      sm: [
        {i:'logo', w: 2, h: 3, x: 0, y: 0},
        {i:'city', w: 2, h: 3.5, x: 2, y: 0},
        {i:'clock', w: 2, h: 3.5, x: 2, y: 3},
        {i:'country', w: 2, h: 7, x: 0, y: 2},
        {i:'countries', w: 2, h: 3, x: 2, y: 5},
        {i:'flights', w: 4, h: 5, x: 0, y: 8},
      ],
      xs: [
        {i:'logo', w: 1, h: 3, x: 0, y: 0},
        {i:'city', w: 2, h: 2, x: 3, y: 0},
        {i:'clock', w: 2, h: 2, x: 5, y: 0},
        {i:'country', w: 2, h: 8, x: 7, y: 0},
        {i:'flights', w: 2, h: 6, x: 15, y: 0},
        {i:'countries', w: 2, h: 3, x: 21, y: 0},
      ],
    };
    let breakpoints = {lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0};
    let cols = {lg: 8, md: 8, sm: 6, xs: 4, xxs: 2};

    return (
      <ResponsiveReactGridLayout
        className="layout"
        cols={cols}
        rowHeight={50}
        breakpoints={breakpoints}
        layouts={responsiveLayouts}
        >
        <div key={'logo'} className={'test'}><Logo/></div>
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
