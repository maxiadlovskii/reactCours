import { combineReducers } from 'redux'
import counterReducer from './counter'
import articles from './articles'
import selectList from './selectList'

export  default combineReducers({
    count: counterReducer,
    articles,
    selected: selectList
})

