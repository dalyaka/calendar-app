import { DATE } from '../constants/actionTypes';

export function incrementDate() {
  return {
    type: DATE.MONTH_INCREMENTED,
  }
}


export function decrementDate() {
  return {
    type: DATE.MONTH_DECREMENTED,
  }
}
