import React, { Component } from 'react'
import {Responsive, WidthProvider} from 'react-grid-layout';
const ResponsiveReactGridLayout = WidthProvider(Responsive);

import Clock from '../components/Clock';
import Logo from '../components/Logo';
import Country from '../components/Country';
import Stats from '../components/Stats';
import Flights from '../components/Flights';
import dashboardLayout from '../components/dashboardLayout'

class DashboardGrid extends Component {
  render () {
    return (
      <ResponsiveReactGridLayout
        className="layout"
        cols={dashboardLayout.columns}
        rowHeight={55}
        breakpoints={dashboardLayout.breakpoints}
        layouts={dashboardLayout.responsiveLayouts}
        >
        <div key={'logo'}><Logo/></div>
        <div key={'city'}>
          <div className="content box notification is-warning">
            <h2 className="title">Chiang Mai</h2>
            <p className="subtitle">Current City</p>
            <p>31&#8451; and Sunny</p>
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
