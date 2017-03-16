import React, { Component } from 'react'
import {Responsive, WidthProvider} from 'react-grid-layout';
const ResponsiveReactGridLayout = WidthProvider(Responsive);

import Clock from '../components/Clock';
import Logo from '../components/Logo';
import Country from '../components/Country';
import Stats from '../components/Stats';
import Flights from '../components/Flights';

class DashboardGrid extends Component {
  render () {
    let responsiveLayouts = {
      lg: [
        {i:'logo', w: 5, h: 6, x: 0, y: 0},
        {i:'city', w: 4, h: 3, x: 5, y: 0},
        {i:'clock', w: 4, h: 3, x: 9, y: 0},
        {i:'stats', w: 8, h: 3, x: 5, y: 3},
        {i:'country', w: 7, h: 12, x: 14, y: 0},
        {i:'flights', w: 13, h: 2*3, x: 0, y: 3},

      ],
      md: [
        {i:'logo', w: 2, h: 6, x: 0, y: 0},
        {i:'city', w: 2, h: 3, x: 2, y: 0},
        {i:'clock', w: 2, h: 3, x: 4, y: 0},
        {i:'country', w: 3, h: 12, x: 6, y: 0},
        {i:'stats', w: 4, h: 3, x: 2, y: 2},
        {i:'flights', w: 6, h: 6, x: 0, y: 6},
      ],
      sm: [
        {i:'logo', w: 1.5, h: 3, x: 0, y: 0},
        {i:'city', w: 2.5, h: 3, x: 1.5, y: 0},
        {i:'clock', w: 2.5, h: 3, x: 1.5, y: 3},
        {i:'country', w: 2, h: 9, x: 5, y: 0},
        {i:'stats', w: 1.5, h: 3, x: 0, y: 3},
        {i:'flights', w: 4, h: 3, x: 0, y: 7},
      ],
      sm: [
        {i:'logo', w: 2, h: 3, x: 0, y: 0},
        {i:'city', w: 2, h: 3.5, x: 2, y: 0},
        {i:'clock', w: 2, h: 3.5, x: 2, y: 3},
        {i:'country', w: 2, h: 7, x: 0, y: 2},
        {i:'stats', w: 2, h: 3, x: 2, y: 5},
        {i:'flights', w: 4, h: 5, x: 0, y: 8},
      ],
      xs: [
        {i:'logo', w: 1, h: 3, x: 0, y: 0},
        {i:'city', w: 2, h: 2.5, x: 1, y: 0},
        {i:'clock', w: 2, h: 2.5, x: 4, y: 0},
        {i:'stats', w: 2, h: 6, x: 0, y: 8},
        {i:'country', w: 3, h: 7, x: 4, y: 14},
        {i:'flights', w: 5, h: 12, x: 0, y: 21},

      ],
    };
    let breakpoints = {lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0};
    let cols = {lg: 20, md: 9, sm: 4, xs: 5, xxs: 2};

    return (
      <ResponsiveReactGridLayout
        className="layout"
        cols={cols}
        rowHeight={55}
        breakpoints={breakpoints}
        layouts={responsiveLayouts}
        >
        <div key={'logo'}><Logo/></div>
        <div key={'city'}>
          <div className="content box notification is-warning">
            <h2 className="title">Chiang Mai</h2>
            <p className="subtitle">City</p>
            <p>31*, Sunny</p>
          </div>
        </div>
        <div key={'clock'}><Clock /></div>
        <div key={'country'}><Country/></div>
        <div key={'flights'}><Flights /></div>
        <div key={'stats'}><Stats /></div>
      </ResponsiveReactGridLayout>
    )
  }
};

export default DashboardGrid;
