import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

import styles from './styles.css';

import Day from '../Day';

class Month extends Component {
  static propTypes = {
    date: PropTypes.object,
  };


  getDays = (dayCount, date) => {
    const firstDayOfWeek = date.date(1).day();
    const lastDayOfWeek = 6 - date.date(dayCount).day();
    const lastMonthDaysCount = date.month(date.month() - 1).daysInMonth();

    const arr = [];

    for (let j = 0; j < firstDayOfWeek; j++) {
      arr.push(<Day key={j} day={lastMonthDaysCount + j - firstDayOfWeek + 1} disabled/>);
    }

    for (let i = 0; i < dayCount; i++) {
      arr.push(<Day key={i + firstDayOfWeek} day={i+1} />);
    }

    for (let k = 0; k < lastDayOfWeek; k++) {
      arr.push(<Day key={dayCount + k + firstDayOfWeek} day={k + 1} disabled/>);
    }

    return arr;
  }

  render() {
    const { date } = this.props;
    const dayCount = this.props.date.daysInMonth();
    return (
      <div className={styles.container}> {this.getDays(dayCount, date)}</div>
    );
  }
}


function mapStateToProps(state) {
  return {
    date: moment(state.currentDate),
  };
}

export default connect(mapStateToProps)(Month);
