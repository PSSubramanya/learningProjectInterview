import {combineReducers} from 'redux';
import CounterReducer from './CounterReducer';
import ListReducer from './ListReducer';

const AppReducer = combineReducers({
  counterValueReducers: CounterReducer,
  listReducerValue: ListReducer,
});

export default AppReducer;
