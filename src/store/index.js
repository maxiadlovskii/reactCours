import {createStore, applyMiddleware} from 'redux'
import reducer from '../reducer'
import logger from '../middleware/logger'
import randomId from '../middleware/randomId'
import api from '../middleware/api'
const  enhancer = applyMiddleware(randomId, api, logger);
const store = createStore(reducer, {}, enhancer)
/////dev
window.store = store

export default store