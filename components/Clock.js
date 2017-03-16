import React, { Component }  from 'react';
import Moment from 'react-moment';
import moment from 'moment';

let describeDifferenceInTimezones = function(differenceInHours) {
  if (differenceInHours > 0) {
    return Math.abs(differenceInHours) + ' hours ahead.';
  } else if (differenceInHours < 0) {
    return Math.abs(differenceInHours) + ' hours behind.';
  } else {
    return '';
  }
};

class Clock extends Component {
  constructor (props) {
    super(props);

    let usersTimezone = moment.tz.guess();
    let usersDateTime = moment().tz(usersTimezone);
    let usersTimezoneOffset = moment.tz.zone(usersTimezone).offset(usersDateTime);

    let locationTimezone = props.cityTimezone;
    let locationDateTime = moment().tz(locationTimezone);
    let locationTimezoneOffset = moment.tz.zone(locationTimezone).offset(usersDateTime);

    let differenceInHours = (usersTimezoneOffset - locationTimezoneOffset) / 60
    let differenceInHoursDescription = describeDifferenceInTimezones(differenceInHours);

    this.state = {
      locationDateTime: locationDateTime,
      differenceInHoursDescription: differenceInHoursDescription,
    };
  }
  render () {
    return (
      <div className="content box notification is-warning">
        <h2 className="title">
          <Moment
            format="ddd h:mm a"
            date={this.state.locationDateTime} />
        </h2>
        <p className="subtitle">Current Time in City</p>
        <p>{this.state.differenceInHoursDescription}</p>
      </div>
    )
  }
};

export default Clock;
