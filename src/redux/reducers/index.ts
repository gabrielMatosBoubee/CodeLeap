import { combineReducers } from 'redux';
import pagination from './page';
import nickname from './nickname';
import popUp from './popUp';

const reducers = combineReducers({ pagination, nickname, popUp });

export default reducers;