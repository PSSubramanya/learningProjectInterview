import {COUNTER_VALUE} from '../constants/types';

export const counterAction = data => {
  return {
    type: COUNTER_VALUE,
    payload: data,
  };
};
