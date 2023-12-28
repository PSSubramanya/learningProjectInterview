import {COUNTER_VALUE} from '../constants/types';
import {combineReducers} from 'redux';

const initialState = {
  data: {},
};

const countReducer = (state = initialState, action) => {
  switch (action?.type) {
    case COUNTER_VALUE:
      return {...state, data: action.payload};
    default:
      return state;
  }
};

const counterValueReducers = combineReducers({
  countReducer,
});

export default counterValueReducers;
