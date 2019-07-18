import {createStore, combineReducers} from 'redux'
import { calculate } from './calculate';

// 链接该项目所有reducer
const reducers = combineReducers({calculate})
// 全局只有一个store
export const store = createStore(reducers)