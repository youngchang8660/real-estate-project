import {createStore, combineReducers} from 'redux'
import userReducer from './userReducer'
import houseReducer from './houseReducer'

const rootReducer = combineReducers({
    user: userReducer,
    house: houseReducer
})

export default createStore(rootReducer)