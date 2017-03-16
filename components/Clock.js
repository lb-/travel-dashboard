import React, { Component }  from 'react';
import Moment from 'react-moment';
import moment from 'moment';

let describeDifferenceInTimezones = function(differenceInHours) {
  if (differenceInHours > 0) {
    return Math.abs(differenceInHours) + ' hours ahead.'
  } else {
    return Math.abs(differenceInHours) + ' hours behind.'
  }
};

class Clock extends Component {
  render () {
    let usersDateTime = moment().tz('Australia/Brisbane');
    let usersTimezoneOffset = moment.tz.zone('Australia/Brisbane').offset(usersDateTime);

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
        <p className="subtitle">Time</p>
        <p>{differenceInHoursDescription}</p>
      </div>
    )
  }
};

export default Clock;
