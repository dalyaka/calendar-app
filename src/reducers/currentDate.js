import { DATE } from '../constants/actionTypes';
import moment from 'moment';

export default function currentDate(state = moment().format('LLLL'), action) {
  switch (action.type) {
    case DATE.MONTH_INCREMENTED:
      return moment(state).add(1, 'months').format('LLLL');
    case DATE.MONTH_DECREMENTED:
      return moment(state).add(-1, 'months').format('LLLL');
    default:
      return state;
  }
}
