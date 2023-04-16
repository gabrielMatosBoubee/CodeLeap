import { combineReducers } from 'redux';
import pagination from './page'
import nickname from './nickname';

const reducers = combineReducers({ pagination, nickname });

export default reducers;