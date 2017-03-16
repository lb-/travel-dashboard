import React, { Component } from 'react';

class Country extends Component {
  render () {
    const countrySvg = 'https://www.amcharts.com/lib/3/maps/svg/thailandLow.svg'
    const countryStyle = {
      backgroundImage: 'url(' + countrySvg + ')',
      backgroundRepeat: 'no-repeat',
      backgroundBlendMode: 'soft-light',
      backgroundSize: 'contain',
    };
    return (
      <div className="country content box notification is-success" style={countryStyle}>
        <h2 className="title">Thailand</h2>
        <p className="subtitle">Country</p>
        <p>Thailand is a Southeast Asian country. It's known for tropical beaches, opulent royal palaces, ancient ruins and ornate temples displaying figures of Buddha. In Bangkok, the capital, an ultramodern cityscape rises next to quiet canalside communities and the iconic temples of Wat Arun, Wat Pho and the Emerald Buddha Temple (Wat Phra Kaew). Nearby beach resorts include bustling Pattaya and fashionable Hua Hin.</p>
      </div>
    )
  }
};

export default Country;
