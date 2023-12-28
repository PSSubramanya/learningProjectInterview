import {LIST_VALUES} from '../constants/types';
import {combineReducers} from 'redux';

const initialState = {
  data: {},
};

const listReducer = (state = initialState, action) => {
  switch (action?.type) {
    case LIST_VALUES:
      return {...state, data: action?.payload};
    default:
      return state;
  }
};

const listReducerValue = combineReducers({listReducer});

export default listReducerValue;
