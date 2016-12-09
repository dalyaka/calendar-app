import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import moment from 'moment';

import { incrementDate, decrementDate } from '../../actions/currentDate';

import styles from './styles.css';

class Header extends Component {
  static propTypes = {
    date: PropTypes.object,
    incrementDate: PropTypes.func,
    decrementDate: PropTypes.func,
  };

  render() {
    const { date, incrementDate, decrementDate} = this.props;
    return (
      <div>
        <div className={styles.container}>
          <div className={styles.circle} onClick={decrementDate}>
            <div className="fa fa-angle-left"></div>
          </div>
          <div className={styles.title} >{ date.format('MMMM') } { date.format('YYYY') }</div>
            <div className={styles.circle} onClick={incrementDate}>
              <div className="fa fa-angle-right"></div>
            </div>
        </div>
        <div className={styles.daysNames}>
          <div>Sun</div>
          <div>Mon</div>
          <div>Tues</div>
          <div>Wed</div>
          <div>Thu</div>
          <div>Fri</div>
          <div>Sat</div>
        </div>
      </div>
    );
  }
}



function mapStateToProps(state) {
  return {
    date: moment(state.currentDate),
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ incrementDate, decrementDate }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
