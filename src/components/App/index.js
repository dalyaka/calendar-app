import React, { Component, PropTypes } from 'react';
import moment from 'moment';

import styles from './styles.css';

import Header from '../Header';
import Month from '../Month';

export default class App extends Component {
  render() {
    return (
      <div className={styles.container}>
        <Header />
        <Month />
      </div>
    );
  }
}
