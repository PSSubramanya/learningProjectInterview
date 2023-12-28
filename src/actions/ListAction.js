import {LIST_VALUES} from '../constants/types';

export const listAction = data => {
  return {
    type: LIST_VALUES,
    payload: data,
  };
};
