import React, { Component } from 'react';

class Stats extends Component {
  render () {
    const totalCountries = 2;
    const totalCities = 3;
    const statStyle ={
      fontSize: '500%',
    }
    return (
      <div className="content box notification is-info">
        <div className="columns">
          <div className="column has-text-centered">
            <h2 className="title is-3">Countries</h2>
            <p className="subtitle" style={statStyle}>{totalCountries}</p>
          </div>
          <div className="column has-text-centered">
            <h2 className="title is-3">Cities</h2>
            <p className="subtitle" style={statStyle}>{totalCities}</p>
          </div>
        </div>
      </div>
    )
  }
};

export default Stats;
