import {combineReducers} from 'redux'
import userReducer from './user'
import iqReducer from './iq'
import commonReducer from './common'

const allReducer = combineReducers({
    user:userReducer,
    iq:iqReducer,
    common:commonReducer
})

export default allReducer
