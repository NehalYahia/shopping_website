import { combineReducers } from 'redux'
import addpro from './addProducts'
import favourite from './addFavourite'

export default combineReducers({
    addpro,
    favourite
})