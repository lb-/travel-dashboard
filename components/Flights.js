import React, { Component } from 'react';

class FlightRow extends Component {
  render () {
    return (
      <div className="columns is-mobile">
        <div className="column">
          <p className="title is-6">{this.props.title}</p>
        </div>
        <div className="column has-text-centered">
          {this.props.distance} <small>KMs</small>
          </div>
        <div className="column has-text-centered">
          {this.props.hours} <small>hours</small>
          </div>
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
    const totalFlights = flightData.reduce((accumulator, value) => accumulator + 1, 0)
    const flightRows = flightData.map((data, index) =>
      <FlightRow
        title={data.title}
        distance={data.distance}
        hours={data.hours}
        key={index}/>
    );
    return (
      <div className="content box notification is-primary">
        <h2 className="title">Flights</h2>
        <p className="subtitle">{totalFlights} Total</p>
        {flightRows}
      </div>
    )
  }
};

export default Flights;
