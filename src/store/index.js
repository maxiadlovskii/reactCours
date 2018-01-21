import {createStore, applyMiddleware} from 'redux'
import reducer from '../reducer'
import logger from '../middleware/logger'
const  enhancer = applyMiddleware(logger);
const store = createStore(reducer, {}, enhancer)
/////dev
window.store = store

export default store