import React, { Component } from 'react';

class City extends Component {
  render () {
    return (
      <div className="content box notification is-warning">
        <h2 className="title">{ this.props.cityName }</h2>
        <p className="subtitle">Current City</p>
        <p>{ this.props.cityWeather }</p>
      </div>
    )
  }
};

export default City;
