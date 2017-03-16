import React, { Component } from 'react';

class FlightRow extends Component {
  render () {
    return (
      <div className="columns">
        <div className="column">{this.props.title}</div>
        <div className="column">{this.props.distance} KMs</div>
        <div className="column">{this.props.hours} hours</div>
      </div>
    )
  }
};

class Flights extends Component {
  render () {
    const flightData = [
      {title: 'Bangkok to Chiang Mai', distance: 3900, hours: 7},
      {title: 'Ho Chi Minh City to Bangkok', distance: 3900, hours: 7},
      {title: 'Hanoi to Ho Chi Minh City', distance: 3900, hours: 2.5},
      {title: 'Ho Chi Minh City to Hanoi', distance: 3900, hours: 2.5},
      {title: 'Brisbane to Singapore', distance: 3200, hours: 3},
      {title: 'Singapore to Ho Chi Minh City', distance: 3900, hours: 2.5},
    ]
    const flightRows = flightData.map((data, index) =>
      <FlightRow
        title={data.title}
        distance={data.distance}
        hours={data.hours}
        key={index}/>
    );
    return (
      <div className="content box">
        {flightRows}
      </div>
    )
  }
};

export default Flights;
