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
  render () {
    let usersTimezone = moment.tz.guess();
    let usersDateTime = moment().tz(usersTimezone);
    let usersTimezoneOffset = moment.tz.zone(usersTimezone).offset(usersDateTime);

    let locationDateTime = moment().tz('Asia/Bangkok');
    let locationTimezoneOffset = moment.tz.zone('Asia/Bangkok').offset(usersDateTime);

    let differenceInHours = (usersTimezoneOffset - locationTimezoneOffset) / 60
    let differenceInHoursDescription = describeDifferenceInTimezones(differenceInHours);
    return (
      <div className="content box notification is-warning">
        <h2 className="title">
          <Moment
            format="ddd h:m a"
            date={locationDateTime} />
        </h2>
        <p className="subtitle">Current Time</p>
        <p>{differenceInHoursDescription}</p>
      </div>
    )
  }
};

export default Clock;
