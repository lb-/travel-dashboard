import React, { Component } from 'react'
var ResponsiveReactGridLayout = require('react-grid-layout').Responsive;

class DashboardGrid extends Component {
  render () {
    // layout is an array of objects, see the demo for more complete usage
    var layout = [
      {i: 'logo', x: 0, y: 0, w: 2, h: 2},
      {i: 'b', x: 1, y: 0, w: 3, h: 2},
      {i: 'c', x: 4, y: 0, w: 1, h: 2}
    ];
    return (
      // <ReactGridLayout className="layout" layout={layout} cols={12} rowHeight={30} width={1200}>
      <ResponsiveReactGridLayout className="layout" layout={layout}
      breakpoints={{lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0}}
      cols={{lg: 12, md: 10, sm: 8, xs: 4, xxs: 2}}>
        <div key={'logo'}>LOGO</div>
        <div key={'b'}>b</div>
        <div key={'c'}>c</div>
      </ResponsiveReactGridLayout>
    )
  }
};

export default DashboardGrid
