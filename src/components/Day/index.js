import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';

import styles from './styles.css';

export default class Day extends Component {
  static propTypes = {
    day: PropTypes.number,
    disabled: PropTypes.bool,
  };


  render() {
    return (
      <div className={classnames(styles.container, {[styles.disabled] : this.props.disabled})}>
        {this.props.day}
      </div>
    );
  }
}
